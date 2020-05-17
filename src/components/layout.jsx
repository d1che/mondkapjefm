import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import GlobalStyle from '../styles/globalStyle';
import themes from '../themes';
import variables from '../styles/variables';

import FixedBackground from './fixedBackground';
import SocialBar from '../components/socialBar';
import PictureCredit from './pictureCredit';
import Logo from '../components/logo';
import Footer from './footer';

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
        <SocialBar />
        <PictureCredit />
        <Container>
          {children}
        </Container>
        <Logo />
        <Footer theme={themes.main}/>
      </React.Fragment>
    </ThemeProvider>
  );
};

export default Layout;
