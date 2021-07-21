import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '../../../commons/Button';
import TextField from '../../../forms/TextField';
import Text from '../../../foundation/Text';

const ImageUrlFormWrapper = styled.div`
  position: relative;
  margin-top: 50px;
  padding-right: 24px;
  padding-left: 24px;

  button {
    font-size: 0;
    position: absolute;
    top: 0;
    right: 0;
    margin-right: 24px;
    padding: 12px;
  }
  
  p {
    color: ${({ theme }) => theme.colors.tertiary.color}
  }
`;

export default function ImageUrlForm({ imgSrc, setImgSrc }) {
  const [urlString, setUrlString] = useState(imgSrc);

  function handleChange(event) {
    const { value } = event.target;
    setUrlString(value);
  }

  function onClick() {
    setImgSrc(urlString);
  }

  return (
    <ImageUrlFormWrapper>
      <TextField
        as="input"
        name="url"
        placeholder="URL da Imagem"
        onChange={handleChange}
        value={urlString}
        padding="13px 50px 13px 16px"
        type="url"
      />
      <Button
        type="button"
        onClick={onClick}
        variant="secondary"
        padding="12px 12px"
        name="selectUrlBtn"
      >
        <img src="/icons/arrow-right.svg" alt="Selecionar Imagem" />
      </Button>

      <Text
        tag="p"
        textAlign="center"
        variant="paragraph2"
        marginBottom="38px"
      >
        Formatos suportados: jpg, png, svg, xpto.
      </Text>
    </ImageUrlFormWrapper>
  );
}

ImageUrlForm.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  setImgSrc: PropTypes.func.isRequired,
};
