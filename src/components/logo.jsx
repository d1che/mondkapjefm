import React from 'react';
//import styled, { keyframes } from 'styled-components';
import styled from 'styled-components';

import variables from '../styles/variables';

import SvgLogo from './svg/svgLogo';

/*const SneezeAnimation = keyframes`
  50% {
    transform: translateY(1.2rem) rotateZ(10deg);
  }
`;

const LogoContainer = styled.div`
  position: absolute;
  bottom: 13.5rem;
  left: 4rem;
  transform-origin: bottom right;
  animation: ${SneezeAnimation} 0.2s ease-in-out;

  @media only screen and (max-width: ${variables.screenWidth}) {
    bottom: calc(${variables.footerHeightMobile} - 1.5rem);
  }
`;*/

const LogoContainer = styled.div`
  position: absolute;
  bottom: 13.5rem;
  left: 4rem;
  transform-origin: bottom right;

  @media only screen and (max-width: ${variables.screenWidth}) {
    bottom: calc(${variables.footerHeightMobile} - 1.5rem);
  }
`;

const Logo = () => {

  return (
    <LogoContainer>
      <SvgLogo />
    </LogoContainer>
  );
};

export default Logo;
