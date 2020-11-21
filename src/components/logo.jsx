import React from 'react';
import styled from 'styled-components';

import variables from '../styles/variables';

import SummerLogo from './svg/SummerLogo';
import AutumnLogo from './svg/AutumnLogo';
import ChristmasLogo from './svg/ChristmasLogo';
import SinterklaasLogo from './svg/SinterklaasLogo';

const LogoContainer = styled.div`
  position: absolute;
  bottom: 14.5rem;
  left: 4rem;

  @media only screen and (max-width: ${variables.screenWidth}) {
    bottom: calc(${variables.footerHeightMobile} - .5rem);
    left: 2rem;
  }
`;

const PlaceLogo = (season) => {
  
  const date = new Date();
  const month = date.getMonth();
  const day = date.getDate();
  if (month === 10 && day > 20) return <SinterklaasLogo />;
  if (month === 11 && day < 6) return <SinterklaasLogo />;
  if (month === 11 && day > 23) return <ChristmasLogo />;

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
