import React from 'react';
import Document from 'next/document';
import nookies from 'nookies';
import { ServerStyleSheet } from 'styled-components';
import { INSTALURA_THEME_COOKIE } from '../src/theme/context/AppThemeContext';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    const serverThemeCookie = nookies.get(ctx)[INSTALURA_THEME_COOKIE];

    try {
      ctx.renderPage = () => originalRenderPage({
        enhanceApp: (App) => (props) => sheet.collectStyles(
          // eslint-disable-next-line react/jsx-props-no-spreading
          <App serverThemeCookie={serverThemeCookie} {...props} />,
        ),
      });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
}
