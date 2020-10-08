import React from 'react';
import { Link } from 'gatsby';
import styled, { ThemeProvider } from 'styled-components';

import GlobalStyle from '../styles/globalStyle';
import themes from '../themes';

const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: ${props => props.theme.colorPrimaryDark};
  text-align: center;
  padding: 1rem;
`;

const Title = styled.h1`
  margin-top: 2rem;
`;

const Paragraph = styled.p`
  margin-top:2rem;
`;

const getSeason = () => {

  let month = new Date().getMonth();

  if (month >= 2 && month < 5) {
    return 'spring';
  } else if (month >= 5 && month < 8) {
    return 'summer';
  } else if (month >= 8 && month < 10) {
    return 'autumn';
  } else {
    return 'winter';
  };
};

const NotFound = () => {

  //let season = "winter";
  let season = getSeason();

  return(
    <ThemeProvider theme={themes[season]}>
      <GlobalStyle />
      <Container>
        <Title>Ja, deze pagina bestaat dus niet...</Title>
        <Paragraph>
          Uhm, wat denk je dat je hier te zoeken hebt? Ga maar gauw weer <Link to="/">terug naar de hoofdpagina</Link>.
        </Paragraph>
      </Container>
    </ThemeProvider>
  );
};

export default NotFound;
