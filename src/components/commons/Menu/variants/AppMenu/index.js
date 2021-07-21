import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
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

export default function AppMenu() {
  const theme = useContext(ThemeContext);
  const { toggleModal } = useWebsitePageContext();

  return (
    <Box
      as="header"
      backgroundColor={theme.colors.background.color}
      borderBottom={theme.currentActive === 'light'
        ? `1px solid ${theme.colors.borders.color}`
        : 'initial'}
    >
      <AppMenuWrapper>
        <AppMenuWrapper.LeftSide>
          <Logo size="large" />
        </AppMenuWrapper.LeftSide>
        <AppMenuWrapper.RightSide>
          <FormSearch />
          <PostButton
            name="newPostBtn"
            onClick={() => toggleModal(<NewPostForm />)}
          >
            <img src={`/icons/theme/${theme.currentActive}/postIcon.svg`} alt="Post" />
          </PostButton>
          <OpenSearchButton><img src="/icons/search.svg" alt="Abrir pesquisa" /></OpenSearchButton>
          <HomeButton><img src={`/icons/theme/${theme.currentActive}/home.svg`} alt="Home" /></HomeButton>
          <HeartButton><img src={`/icons/theme/${theme.currentActive}/heart.svg`} alt="Like" /></HeartButton>
          <AvatarImage src="https://github.com/felipevash.png" alt="Avatar" />
        </AppMenuWrapper.RightSide>
      </AppMenuWrapper>
    </Box>
  );
}
