import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import TextField from '../../../forms/TextField';

const DescriptionFormWrapper = styled.div`
    margin-top: 20px;
    padding-right: 24px;
    padding-left: 24px;

    textarea {
      height: 127px;
    }
`;

export default function DescriptionForm({ description, setDescription }) {
  function onChange(event) {
    const newDescription = event.target.value;
    setDescription(newDescription);
  }

  return (
    <DescriptionFormWrapper>
      <TextField
        as="textarea"
        name="descriptionField"
        placeholder="Descrição do post."
        value={description}
        onChange={onChange}
      />
    </DescriptionFormWrapper>
  );
}

DescriptionForm.propTypes = {
  description: PropTypes.string.isRequired,
  setDescription: PropTypes.func.isRequired,
};
