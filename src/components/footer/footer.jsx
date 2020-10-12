import React from 'react';
import styled from 'styled-components';

import variables from '../../styles/variables';

import Metadata from './metadata/metadata';
import Player from './player/player';

const FooterContainer = styled.div`
  position: absolute;
  bottom: 0;
  height: 15rem;
  width: 100vw;
  background: linear-gradient(to right,
      ${props => props.theme.colorPrimaryLight}99,
      ${props => props.theme.colorPrimaryDark}ff);
  
  border-top: 1px solid ${props => props.theme.colorPrimaryDark};
  backdrop-filter: blur(5px);

  @media only screen and (max-width: ${variables.screenWidth}) {
    height: ${variables.footerHeightMobile};
  }
`;

const Footer = ({ theme }) =>  {
  return (
    <FooterContainer>
      <Metadata />
      <Player theme={theme}/>
    </FooterContainer>
  );
}

export default Footer;




