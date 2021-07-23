/* eslint-disable indent */
import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { Box } from '../../../../foundation/layout/Box';
import { breakpointsMedia } from '../../../../../theme/utils/breakpointsMedia';
import StatsBox from './StatsBox';
import UserIdentification from './UserIdentification';

const UserCardWrapper = styled.section`
  align-items: center;
  display:flex;
  justify-content: space-evenly;
  background-color: #191919;
  border: solid white;
  border-radius: 15px;
  margin-bottom: 1%;
  padding:15px;
  width: 100%;
  ${breakpointsMedia({
      md: css`
        justify-content: center;
      `,
    })}
  img {
    border: solid white;
    border-radius: 50%;
    height: fit-content;
    object-fit: cover;
    width: 33%;
    ${breakpointsMedia({
      md: css`
        width: 20%;
      `,
      lg: css`
        width: 15%;
      `,
    })}
  }
`;

export default function UserCard({ numberOfPosts, user }) {
  return (
    <UserCardWrapper>
      <img src={user.avatar} alt="Avatar" />
      <StatsBox>
        <UserIdentification
          name={user.name}
          username={user.username}
        />
        <Box
          display="flex"
          flexDirection="row"
          padding="10px"
          justifyContent="flex-start"
          width="100%"
        >
          <StatsBox.Stat
            statValue={numberOfPosts}
            statName="Publicações"
          />

          <StatsBox.Stat
            statValue={user.following}
            statName="Seguindo"
          />

          <StatsBox.Stat
            statValue={user.followers}
            statName="Seguidores"
          />
        </Box>
      </StatsBox>
    </UserCardWrapper>
  );
}

UserCard.propTypes = {
  numberOfPosts: PropTypes.number.isRequired,

  user: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired,
  }).isRequired,
};
