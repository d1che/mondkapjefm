import React, { useState, useEffect } from 'react';
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
  border-top: 1px solid ${props => props.theme.colorPrimaryDark};
  backdrop-filter: blur(5px);

  @media only screen and (max-width: ${variables.screenWidth}) {
    height: ${variables.footerHeightMobile};
  }
`;

const Footer = () => {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    const dataFetch = setInterval(() => {
      fetch('https://stream.mondkapjefm.nl:8443/status-json.xsl')
      .then(r => r.json())
      .then(json => json.icestats)
      .then(icestats => setStats(icestats));
    }, 500)

    return () => {
      clearInterval(dataFetch);
    }
  }, [])

  return (
    <FooterContainer>
      <Metadata stats={stats}/>
      <Player stats={stats}/>
    </FooterContainer>
  );
};

export default Footer;
