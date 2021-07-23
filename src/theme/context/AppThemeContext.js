import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import nookies from 'nookies';
import commonTheme, { colorThemes } from '..';

const AppThemeContext = React.createContext();

export const INSTALURA_THEME_COOKIE = 'INSTALURA_THEME_COOKIE';

export function AppThemeProvider({ children, serverThemeCookie }) {
  const clientThemeCookie = nookies.get(null)[INSTALURA_THEME_COOKIE] || serverThemeCookie;
  const [themeMode, setThemeMode] = useState(clientThemeCookie || 'light');

  return (
    <ThemeProvider
      theme={{
        currentActive: themeMode,
        colors: colorThemes[themeMode],
        ...commonTheme,
      }}
    >
      <AppThemeContext.Provider
        value={{
          themeMode,
          setThemeMode,
        }}
      >
        {children}
      </AppThemeContext.Provider>
    </ThemeProvider>
  );
}

AppThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
  serverThemeCookie: PropTypes.string,
};

AppThemeProvider.defaultProps = {
  serverThemeCookie: undefined,
};

export default function useAppThemeContext() {
  return useContext(AppThemeContext);
}
