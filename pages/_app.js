/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable linebreak-style */
/* eslint-disable react/react-in-jsx-scope */
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import theme from '../src/theme';
import GlobalStyle from '../src/theme/GlobalStyle';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Instafolio || Promova seus trabalhos e conheça outros profissionais!</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        {/* <!-- Primary Meta Tags --> */}
        <meta name="title" content="Promova seus trabalhos e conheça outros profissionais!" />
        <meta name="description" content="O Instafolio é uma ferramenta social para compartilhar, curtir, comentar o seu portfolio artístico/profissional e trocar experiências com mais pessoas da sua e de outras áreas de seu interesse." />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://instafolio.vercel.app/" />
        <meta property="og:title" content="Promova seus trabalhos e conheça outros profissionais!" />
        <meta property="og:description" content="O Instafolio é uma ferramenta social para compartilhar, curtir, comentar o seu portfolio artístico/profissional e trocar experiências com mais pessoas da sua e de outras áreas de seu interesse." />
        <meta property="og:image" content="public/images/sitepreview.jpg" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://instafolio.vercel.app/" />
        <meta property="twitter:title" content="Promova seus trabalhos e conheça outros profissionais!" />
        <meta property="twitter:description" content="O Instafolio é uma ferramenta social para compartilhar, curtir, comentar o seu portfolio artístico/profissional e trocar experiências com mais pessoas da sua e de outras áreas de seu interesse." />
        <meta property="twitter:image" content="public/images/sitepreview.jpg" />

      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
