import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import variables from '../../styles/variables';

import Metadata from './metadata/metadata';
import Player from './player/player';

const FooterContainer = styled.div`
  position: absolute;
  bottom: 0;
  height: 15rem;
  width: 100vw;

  background: ${props => props.offline ? `
    repeating-linear-gradient(
      45deg,
      ${props.theme.colorPrimaryLight},
      ${props.theme.colorPrimaryLight} 20px,
      ${props.theme.colorPrimaryDark} 20px,
      ${props.theme.colorPrimaryDark} 40px
    )
  ` : `
    linear-gradient(
      to right,
      ${props.theme.colorPrimaryLight}99,
      ${props.theme.colorPrimaryDark}ff
    )
  `};
  
  border-top: 1px solid ${props => props.theme.colorPrimaryDark};
  backdrop-filter: ${props => props.offline ? `
    none
  ` : `
    blur(5px)
  `};

  @media only screen and (max-width: ${variables.screenWidth}) {
    height: ${variables.footerHeightMobile};
  }
`;

const Glass = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: ${props => props.theme.colorText}44;
  backdrop-filter: blur(2px);
`;

const Offline = styled.div`
  position: absolute;
  display: inline-block;
  top: 5rem;
  left: 50%;
  transform: translate(-50%);
  padding-left: .4rem;
  padding-right: .3rem;
  font-size: 3rem;
  font-weight: 700;
  white-space: nowrap;
  color: ${props => props.theme.colorTextError};

  @media only screen and (max-width: ${variables.screenWidth}) {
    top: 3.5rem;
    font-size: 2rem;
  }
`;

const Footer = ({ theme }) =>  {
  const [online, setOnline] = useState(true);

  useEffect(() => {
    const audio = new Audio();
    audio.src = 'https://stream.mondkapjefm.nl:8443/stream';

    let timeout;

    const handleEvent = () => {
      clearTimeout(timeout);
    }

    const checker = () => {
      try {
        timeout = setTimeout(setOnline, 9000, false);
        audio.load();
      } catch(err) {
        console.warn("Can't load audio stream.");
      }
    };

    audio.addEventListener('loadeddata', handleEvent);
    const timer = setInterval(checker, 10000);

    return () => {
      audio.removeEventListener('loadeddata', handleEvent);
      clearInterval(timer);
      clearTimeout(timeout);
    }

  }, []);

  if (online) {
    return (
      <FooterContainer>
        <Metadata />
        <Player theme={theme}/>
      </FooterContainer>
    );
  } else {
    return (
      <FooterContainer offline>
        <Glass />
        <Offline>
          Op dit moment is de stream offline.
        </Offline>
      </FooterContainer>
    );
  }
}

export default Footer;




