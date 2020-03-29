import React from 'react';
import styled from 'styled-components';

import variables from '../styles/variables';

import Metadata from './metadata';
import Player from './player';

const FooterContainer = styled.div`
  position: fixed;
  bottom: 0;
  height: 15rem;
  width: 100%;
  background-image: linear-gradient(
    to right,
    ${props => props.theme.colorPrimaryLight}99,
    ${props => props.theme.colorPrimaryDark}ff
  );
  backdrop-filter: blur(4px);

  @media only screen and (max-width: ${variables.screenWidth}) {
    height: ${variables.footerHeightMobile};
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Metadata />
      <Player />
    </FooterContainer>
  );
};

export default Footer;
