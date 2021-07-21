/* eslint-disable indent */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { breakpointsMedia } from '../../../../../theme/utils/breakpointsMedia';
import StatsBox from './StatsBox';
import UserIdentification from './UserIdentification';

const baseImgHeight = 88;

const UserCardWrapper = styled.section`
  display:flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  margin: 12px auto;
  background-color: #191919;
  border: solid white;
  border-radius: 15px;
  ${breakpointsMedia({
    md: {
      margin: '64px 0',
    },
  })}

  img {
    border-radius: 50%;
    height: ${baseImgHeight}px;
    object-fit: cover;
    margin-right: 9px;

    ${breakpointsMedia({
      md: {
        height: `${2 * baseImgHeight}px`,
      },
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
