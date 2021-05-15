/* eslint-disable react/prop-types *//* eslint-disable linebreak-style */
import React from 'react';
import Text from '../src/components/foundation/Text';
import Button from '../src/components/commons/Button';
import { Grid } from '../src/components/foundation/layout/Grid';
import { WebsitePageContext } from '../src/components/wrappers/WebsitePage';
import { Box } from '../src/components/foundation/layout/Box';
import websitePageHOC from '../src/components/wrappers/WebsitePage/hoc';

function HomeScreen() {
  const websitePageContext = React.useContext(WebsitePageContext);

  return (
    <Box
      display="flex"
      flex="1"
      flexDirection="column"
    >
      <Grid.Container
        marginTop={{
          xs: '32px',
          md: '75px',
        }}
      >
        <Grid.Row>
          <Grid.Col
            value={{ xs: 12, md: 5 }}
            offset={{ xs: 0, md: 1 }}
            display="flex"
            alignItems="flex-start"
            justifyContent="center"
            flexDirection="column"
          >
            <div>
              <Text
                variant="title"
                tag="h1"
                color="primary.main"
                textAlign={{
                  xs: 'center',
                  md: 'left',
                }}
              >
                Compartilhe seu Portfolio de forma prática e intuitiva
              </Text>
              <Text
                variant="paragraph1"
                tag="p"
                color="tertiary.light"
                textAlign={{
                  xs: 'center',
                  md: 'left',
                }}
              >
                O Instafolio é uma aplicação inovadora para divulgar
                seu portfolio de qualquer área de trabalho.
                Siga artistas, colegas de trabalho e empresas.
                Descubra novas tendências e matenha-se atualizado sempre!
              </Text>

              <Button
                variant="primary.main"
                margin={{
                  xs: 'auto',
                  md: 'initial',
                }}
                display="block"
                onClick={() => websitePageContext.toggleModalCadastro()}
              >
                Cadastrar
              </Button>
            </div>
          </Grid.Col>
          <Grid.Col
            value={{ xs: 12, md: 6 }}
          >
            <img
              style={{ display: 'block', margin: 'auto' }}
              src="https://bootcamp-alura-01-git-modulo01.omariosouto.vercel.app/images/phones.png"
              alt="Imagem de Smartphone com aplicativo Instalura aberto com o perfil do Nicolas Cage"
            />
          </Grid.Col>
        </Grid.Row>
      </Grid.Container>
    </Box>
  );
}

export default websitePageHOC(HomeScreen, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Home',
    },
    pageBoxProps: {
      backgroundImage: 'url(/images/bubbles.svg)',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'bottom right',
    },
  },
});
