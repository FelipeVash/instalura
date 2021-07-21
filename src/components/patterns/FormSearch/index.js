import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { HttpClient } from '../../../infra/http/HttpClient';
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia';
import Button from '../../commons/Button';
import TextField from '../../forms/TextField';
import SearchResults from './components/SearchResults';

const SearchBtn = styled(Button)`
  background-color: transparent;
  position: absolute;
  top: 50%;
  left: 80%;
  transform: translate(50%, -50%);
  font-size: 0;
  padding: 0;

  &:disabled {
    cursor: default;
  }
`;

const FormSearchWrapper = styled.form`
  position: relative;
  display: none;
  padding-top: 20px;
  ${breakpointsMedia({
    md: {
      display: 'initial',
    },
  })}
`;

export default function FormSearch() {
  const searchInitialResult = [];

  const [searchArg, setSearchArg] = useState('');
  const [searchID, setSearchID] = useState(0);
  const [searchResult, setSearchResult] = useState(searchInitialResult);
  const [isSearchResultVisible, setIsSearchResultVisible] = useState(false);

  const hasSearchResult = searchResult.length !== 0;
  const isValidForm = Boolean(searchArg);

  async function sendSearchRequest() {
    await HttpClient('/api/search', {
      method: 'POST',
      body: {
        searchArg,
      },
    })
      .then((response) => {
        setSearchResult(response);
        setIsSearchResultVisible(true);
      });
  }

  function onSubmit(event) {
    event.preventDefault();
    clearTimeout(searchID);
    sendSearchRequest();
  }

  function handleChange(event) {
    const { value } = event.target;
    setSearchArg(value);
  }

  useEffect(() => {
    const closeResult = () => setIsSearchResultVisible(false);
    if (isSearchResultVisible) document.addEventListener('click', closeResult);
    return () => document.removeEventListener('click', closeResult);
  }, [isSearchResultVisible]);

  useEffect(() => {
    if (isValidForm) {
      clearTimeout(searchID);
      setSearchID(setTimeout(sendSearchRequest, 250));
    } else {
      clearTimeout(searchID);
      setSearchResult(searchInitialResult);
      setIsSearchResultVisible(false);
    }
  }, [searchArg]);

  return (
    <FormSearchWrapper
      onSubmit={onSubmit}
      onClick={() => setIsSearchResultVisible(true)}
    >
      <TextField
        name="search"
        placeholder="Pesquisar"
        value={searchArg}
        onChange={handleChange}
        autoComplete="off"
        isSearchBox
      />
      <SearchBtn
        type="submit"
        disabled={!isValidForm}
      >
        <img src="/icons/search.svg" alt="Lupa" />
      </SearchBtn>
      {isSearchResultVisible && hasSearchResult && (
        <SearchResults
          searchResult={searchResult}
        />
      )}
    </FormSearchWrapper>
  );
}
