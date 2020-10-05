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

const getSeason = () => {

  let month = new Date().getMonth();

  if (month >= 2 && month < 5) {
    return "spring";
  } else if (month >= 5 && month < 8) {
    return "summer";
  } else if (month >= 8 && month < 10) {
    return "autumn";
  } else {
    return "winter";
  };
};

const Layout = ({ children }) => {

  return (
    <ThemeProvider theme={themes.autumn}>
      <React.Fragment>
        <GlobalStyle />
        <FixedBackground/>
        <SocialBar />
        <PictureCredit />
        <Container theme={themes.autumn}>
          {children}
        </Container>
        <Logo />
        <Footer theme={themes.autumn}/>
      </React.Fragment>
    </ThemeProvider>
  );
};

export default Layout;
