import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../../../theme/utils/breakpointsMedia';
import Text from '../../../../foundation/Text';

const UserIdenticationWrapper = styled.div`
  display: inline-block;
  width:100%;
  ${breakpointsMedia({
    md: css`
      margin-left: 2rem;
    `,
    xl: css`
      margin-left: 4rem;
    `,
  })};

  h2 {
    margin-bottom: 0;
  }

  p {
    margin-top: 0;
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
