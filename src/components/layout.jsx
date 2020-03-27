import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import GlobalStyle from '../styles/globalStyle';
import themes from '../themes';
import variables from '../styles/variables';

import Footer from './footer';
import FixedBackground from './fixedBackground';

const Container = styled.div`
  padding: 4rem;

  @media only screen and (max-width: ${variables.screenWidth}) {
    padding: 2rem;
    padding-top: calc(${variables.menuHeightMobile} + 2rem);
  }
`;

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={themes.main}>
      <React.Fragment>
        <GlobalStyle />
        <FixedBackground />
        <Container>
          {children}
        </Container>
        <Footer />
      </React.Fragment>
    </ThemeProvider>
  );
};

export default Layout;
