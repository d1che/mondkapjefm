import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import GlobalStyle from '../styles/globalStyle';
import Animations from '../styles/animations';
import themes from '../themes';
import variables from '../styles/variables';

import FixedBackground from './fixedBackground';
import SocialBar from '../components/socialBar';
import PictureCredit from './pictureCredit';
import Logo from '../components/logo';
import Footer from './footer/footer';

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
    return 'spring';
  } else if (month >= 5 && month < 8) {
    return 'summer';
  } else if (month >= 8 && month < 10) {
    return 'autumn';
  } else {
    return 'winter';
  };
};

const Layout = ({ children }) => {

  //let season = "winter";
  let season = getSeason();

  return (  
    <ThemeProvider theme={themes[season]}>
      <React.Fragment>
        <GlobalStyle />
        <Animations />
        <FixedBackground theme={themes[season]}/>
        <SocialBar />
        <PictureCredit theme={themes[season]}/>
        <Container theme={themes[season]}>
          {children}
        </Container>
        <Logo season={season}/>
        <Footer theme={themes[season]}/>
      </React.Fragment>
    </ThemeProvider>
  );
};

export default Layout;
