import React from 'react';
import styled, { keyframes } from 'styled-components';

import variables from '../styles/variables';

import SummerLogo from './svg/SummerLogo';

const SneezeAnimation = keyframes`
  50% {
    transform: translateY(1.2rem) rotateZ(10deg);
  }
`;

const LogoContainer = styled.div`
  position: absolute;
  bottom: 14.5rem;
  left: 4rem;
  transform-origin: bottom right;
  animation: ${SneezeAnimation} 0.2s ease-in-out;

  @media only screen and (max-width: ${variables.screenWidth}) {
    bottom: calc(${variables.footerHeightMobile} - .5rem);
    left: 2rem;
  }
`;

const Logo = () => {
  return (
    <LogoContainer>
      <SummerLogo />
    </LogoContainer>
  );
};

export default Logo;
