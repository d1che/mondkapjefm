import React from 'react';
import styled, { keyframes } from 'styled-components';

import variables from '../styles/variables';

import SummerLogo from './svg/SummerLogo';
import AutumnLogo from './svg/AutumnLogo';
import ChristmasLogo from './svg/ChristmasLogo';

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

const PlaceLogo = (season) => {
  
  const date = new Date();
  if (date.getMonth() === 11 && date.getDate() > 23) return <ChristmasLogo />;

  switch (season) {
    case "winter": 
      return <AutumnLogo />
    case "spring":
      return <SummerLogo />
    case "summer":
      return <SummerLogo />
    case "autumn":
      return <AutumnLogo />
    default:
      return <SummerLogo />
  };
};

const Logo = ({ season }) => {
  return (
    <LogoContainer>
      {PlaceLogo(season)}
    </LogoContainer>
  );
};

export default Logo;
