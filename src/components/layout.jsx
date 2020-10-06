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
    return themes.spring;
  } else if (month >= 5 && month < 8) {
    return themes.summer;
  } else if (month >= 8 && month < 10) {
    return themes.autumn;
  } else {
    return themes.winter;
  };
};

const Layout = ({ children }) => {

  let currentTheme = getSeason();
  /*let currentTheme = themes.spring;*/

  return (
    <ThemeProvider theme={currentTheme}>
      <React.Fragment>
        <GlobalStyle />
        <FixedBackground theme={currentTheme}/>
        <SocialBar />
        <PictureCredit theme={currentTheme}/>
        <Container theme={currentTheme}>
          {children}
        </Container>
        <Logo />
        <Footer theme={currentTheme}/>
      </React.Fragment>
    </ThemeProvider>
  );
};

export default Layout;
