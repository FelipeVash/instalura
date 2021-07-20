/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Avatar } from '../../../commons/Avatar';
import { Grid } from '../../../foundation/layout/Grid';
import { Box } from '../../../foundation/layout/Box';
import { UserStats } from './UserStats';
import { UserBio } from './UserBio';
import { UserPosts } from './UserPosts';
import { UserContext } from '../../../wrappers/WebsitePage/context/user';

export default function UserScreen({ userInfo, posts: serverPosts }) {
  const { posts, setPosts } = React.useContext(UserContext);

  React.useEffect(() => {
    setPosts(serverPosts);
  }, [posts]);

  return (
    <Grid.Container
      marginTop={{ xs: '24px', md: '64px' }}
    >
      <Grid.Row
        justifyContent="center"
        columnGap={{ md: '10px' }}
      >
        <Grid.Col
          value={{ xs: 3, md: 2, lg: 3 }}
        >
          <Box
            width={{
              xs: '70px',
              sm: '90px',
              md: '120px',
              lg: '188px',
            }}
          >
            <Avatar
              src="/images/avatar.png"
              alt="Foto de perfil deste usuário"
              size="inherit"
            />
          </Box>
        </Grid.Col>
        <UserStats
          statsCount={userInfo.userInfo.totalPosts}
          statsTitle="Publicações"
        />
        <UserStats
          statsCount={userInfo.userInfo.totalFollowing}
          statsTitle="Seguindo"
        />
        <UserStats
          statsCount={userInfo.userInfo.totalFollowers}
          statsTitle="Seguidores"
        />
        <UserBio
          name="Nicolas Cage"
          bio={userInfo.userInfo.bio}
          display="flex"
        />
      </Grid.Row>
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="space-between"
      >
        <UserPosts posts={serverPosts} userID={userInfo.userInfo.id} />
      </Box>
    </Grid.Container>
  );
}

UserScreen.propTypes = {
  userInfo: PropTypes.shape({
    userInfo: PropTypes.shape({
      id: PropTypes.string,
      bio: PropTypes.string,
      totalPosts: PropTypes.number,
      totalFollowing: PropTypes.number,
      totalFollowers: PropTypes.number,
    }),
  }).isRequired,
  posts: PropTypes.array.isRequired,
};
