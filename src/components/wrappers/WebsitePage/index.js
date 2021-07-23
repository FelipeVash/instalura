/* eslint-disable react/jsx-props-no-spreading */
import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import get from 'lodash/get';
import PropTypes from 'prop-types';
import Footer from '../../commons/Footer';
import Menu from '../../commons/Menu';
import Modal from '../../commons/Modal';
import { Box } from '../../foundation/layout/Box';
import SEO from '../../commons/SEO';

import { WebsitePageContextProvider } from './context';

export default function WebsitePageWrapper({
  children,
  seoProps,
  pageBoxProps,
  menuProps,
  footerProps,
  messages,
  user,
}) {
  const theme = useContext(ThemeContext);

  const {
    backgroundColor, backgroundThemedImage, ...remainingPageBoxProps
  } = pageBoxProps;
  const hasThemedImage = Boolean(backgroundThemedImage);

  return (
    <WebsitePageContextProvider messages={messages}>
      <SEO
        {...seoProps}
      />

      <Box
        display="flex"
        flex="1"
        flexDirection="column"
        justifyContent="flex-start"
        backgroundColor={get(theme.colors, `${backgroundColor}.color`)}
        backgroundImage={hasThemedImage && `url(/images/theme/${theme.currentActive}${backgroundThemedImage})`}
        {...remainingPageBoxProps}
      >
        <Modal />
        {menuProps.display && (
          <Menu
            variant={menuProps.variant}
            user={user.username}
          />
        )}
        {children}
        {footerProps.display && <Footer />}
      </Box>
    </WebsitePageContextProvider>
  );
}

WebsitePageWrapper.defaultProps = {
  seoProps: {},
  pageBoxProps: {},
  menuProps: {
    display: true,
    variant: 'public',
  },
  footerProps: {
    display: true,
  },
  messages: {},
  user: {},
};

WebsitePageWrapper.propTypes = {
  seoProps: PropTypes.shape({
    headTitle: PropTypes.string,
  }),
  menuProps: PropTypes.shape({
    display: PropTypes.bool,
    variant: PropTypes.string,
  }),
  footerProps: PropTypes.shape({
    display: PropTypes.bool,
  }),
  pageBoxProps: PropTypes.shape({
    backgroundImage: PropTypes.string,
    backgroundThemedImage: PropTypes.string,
    backgroundRepeat: PropTypes.string,
    backgroundPosition: PropTypes.string,
    backgroundColor: PropTypes.string,
  }),
  children: PropTypes.node.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  messages: PropTypes.object,
  // eslint-disable-next-line react/forbid-prop-types
  user: PropTypes.object,
};
