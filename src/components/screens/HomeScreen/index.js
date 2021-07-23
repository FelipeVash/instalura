import React from 'react';
import Button from '../../commons/Button';
import { Box } from '../../foundation/layout/Box';
import { Grid } from '../../foundation/layout/Grid';
import Text from '../../foundation/Text';
import FormRegister from '../../patterns/FormCadastro';
import useWebsitePageContext from '../../wrappers/WebsitePage/context';

export default function HomeScreen() {
  const websitePageContext = useWebsitePageContext();

  return (
    <Box
      display="flex"
      flexDirection="column"
      flex="1"
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
                Compartilhe momentos e conecte-se com amigos
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
                O Instalura é uma aplicação inovadora para divulgar
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
                onClick={() => websitePageContext.toggleModal(<FormRegister />)}
              >
                Cadastrar
              </Button>
            </div>
          </Grid.Col>
          <Grid.Col
            value={{
              xs: 12,
              md: 6,
            }}
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
