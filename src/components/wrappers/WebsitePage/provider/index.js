import React from 'react';
import PropTypes from 'prop-types';
import GlobalStyle from '../../../../theme/GlobalStyle';
import { AppThemeProvider } from '../../../../theme/context/AppThemeContext';

export default function WebsiteGlobalProvider({ children, serverThemeCookie }) {
  return (
    <AppThemeProvider serverThemeCookie={serverThemeCookie}>
      <GlobalStyle />
      {children}
    </AppThemeProvider>
  );
}

WebsiteGlobalProvider.propTypes = {
  children: PropTypes.node.isRequired,
  serverThemeCookie: PropTypes.string,
};

WebsiteGlobalProvider.defaultProps = {
  serverThemeCookie: undefined,
};
