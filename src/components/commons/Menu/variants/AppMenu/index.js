import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import PropTypes from 'prop-types';
import { Box } from '../../../../foundation/layout/Box';
import { Logo } from '../../../../../theme/Logo';
import { breakpointsMedia } from '../../../../../theme/utils/breakpointsMedia';
import FormSearch from '../../../../patterns/FormSearch';
import { IconButton } from '../../../Button';
import AppMenuWrapper from './styles/AppMenuWrapper';
import useWebsitePageContext from '../../../../wrappers/WebsitePage/context';
import NewPostForm from '../../../../patterns/NewPostForm';

const PostButton = styled(IconButton)`
  order: 3;
  border:solid white;
  border-radius: 100%;
  img {
    height: 40px;
  }

  ${breakpointsMedia({
    md: {
      order: '1',
      img: { height: '32px' },
      marginLeft: '32px',
    },
  })}
`;

const HomeButton = styled(IconButton)`
  order: 1;
  filter: invert();
  ${breakpointsMedia({
    md: {
      order: '2',
      marginLeft: '32px',
    },
  })}
`;

const HeartButton = styled(IconButton)`
  order: 4;
  filter: invert();
  ${breakpointsMedia({
    md: {
      marginLeft: '32px',
    },
  })}
`;

const OpenSearchButton = styled(IconButton)`
  order: 2;
  ${breakpointsMedia({
    md: {
      display: 'none',
      marginLeft: '32px',
    },
  })}
`;

const AvatarImage = styled.img`
  order: 5;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 3px solid white;
  ${breakpointsMedia({
    md: {
      marginLeft: '32px',
    },
  })}
`;

export default function AppMenu({ user }) {
  const theme = useContext(ThemeContext);
  const { toggleModal } = useWebsitePageContext();

  return (
    <Box
      as="header"
      backgroundColor={theme.colors.background.color}
      justifyContent="center"
      alignItems="center"
      width="100%"
      padding="10px"
    >
      <AppMenuWrapper>
        <AppMenuWrapper.LeftSide>
          <a href="/">
            <Logo size="large" />
          </a>
        </AppMenuWrapper.LeftSide>
        <AppMenuWrapper.RightSide>
          <FormSearch />
          <PostButton
            name="newPostBtn"
            onClick={() => toggleModal(<NewPostForm />)}
          >
            <img src="/icons/theme/light/postIcon.svg" alt="Post" />
          </PostButton>
          <OpenSearchButton><img src="/icons/search.svg" alt="Abrir pesquisa" /></OpenSearchButton>
          <a href="/app/feed">
            <HomeButton><img src="/icons/theme/light/home.svg" alt="Home" /></HomeButton>
          </a>
          <HeartButton><img src="/icons/theme/light/heart.svg" alt="Like" /></HeartButton>
          <a href="/app/profile">
            <AvatarImage src={`https://github.com/${user}.png`} alt="Avatar" />
          </a>
        </AppMenuWrapper.RightSide>
      </AppMenuWrapper>
    </Box>
  );
}

AppMenu.propTypes = {
  user: PropTypes.string.isRequired,
};
