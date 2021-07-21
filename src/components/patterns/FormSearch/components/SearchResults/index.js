import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Text from '../../../../foundation/Text';

const SearchResultsWrapper = styled.div`
  position: absolute;
  right: 0;
  left: 0;

  border: 1px solid ${({ theme }) => theme.colors.tertiary.color};
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme }) => theme.colors.background.color};

  max-height: 20rem;
  overflow-y: scroll;
  margin-top: 4px;

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */

  a {
    color: initial;
    text-decoration: none;
  }

  a:hover {
    color: ${({ theme }) => theme.colors.tertiary.contrast};
  }
`;

const SearchCard = styled.div`
  display: flex;
  flex-direction: column;
  align-content: space-between;
  justify-content: space-evenly;
  flex-wrap: wrap;

  height: 3.5rem;
  max-width: 100%;
  padding: 0.5rem 1rem;

  div {
    width: 75%;
    overflow-x: clip;
  }

  img {
    max-height: 100%;
    border-radius: 50%;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary.color};
  }
`;

export default function SearchResults({ searchResult }) {
  if (searchResult[0]?.message) {
    return (
      <SearchResultsWrapper>
        <Text
          tag="p"
          margin="1rem"
          color="tertiary.main"
        >
          {searchResult[0].message}
        </Text>
      </SearchResultsWrapper>
    );
  }

  return (
    <SearchResultsWrapper>
      {searchResult.map((user, index) => (
        <a
          key={user.username}
          href="https://google.com"
        >
          <SearchCard>
            <div>
              <Text
                tag="p"
                margin="0"
                color="tertiary.main"
              >
                {user.name}
              </Text>
              <Text
                tag="p"
                margin="0 0 0 0.5rem"
                variant="paragraph2"
                color="tertiary"
              >
                {user.username}
              </Text>
            </div>
            <img src={`http://picsum.photos/100?random=${index}`} alt="Avatar" />
          </SearchCard>
        </a>
      ))}
    </SearchResultsWrapper>
  );
}

SearchResults.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  searchResult: PropTypes.array.isRequired,
};
