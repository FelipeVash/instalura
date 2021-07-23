import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Text from '../../../../foundation/Text';

const UserIdenticationWrapper = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  width:fit-content;
  padding: 10px;
  width:100%;
  h2 {
    margin: 0;
    width: 100%;
  }

  p {
    margin: 0;
    width: 100%;
  }
`;

export default function UserIdentification({ username, name }) {
  return (
    <UserIdenticationWrapper>
      <Text
        tag="h2"
        color="tertiary.main"
        variant={{ xs: 'paragraph1Bold', md: 'subTitle' }}
      >
        {name}
      </Text>
      <Text
        tag="p"
        color="tertiary.main"
        variant={{ xs: 'smallestException', md: 'paragraph1' }}
      >
        {username}
      </Text>
    </UserIdenticationWrapper>
  );
}

UserIdentification.propTypes = {
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
};
