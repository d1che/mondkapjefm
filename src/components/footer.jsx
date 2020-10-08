import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'

import variables from '../styles/variables';

import Metadata from './metadata';
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

const Loading = styled.div`
  position: absolute;
  display: inline-block;
  top: 3.5rem;
  left: 50%;
  transform: translate(-50%);
  padding-left: .4rem;
  padding-right: .3rem;

  @media only screen and (max-width: ${variables.screenWidth}) {
    top: 1rem;
    font-size: 2rem;
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

const Footer = (props) =>  {
  const [data, setData] = useState(null);
  const [offline, setOffline] = useState(false);
  const timeout = useRef(0);

  const fetchData = async () => {
    try {
      const response = await fetch('https://stream.mondkapjefm.nl:8443/status-json.xsl');
      const json = await response.json();
      // If this is the first run, set the data immediately
      setTimeout(setData, timeout.current, json);
      timeout.current = 6000;
      setOffline(false);
    } catch(err) {
      setOffline(true);
      console.warn(err);
    }
  }

  useEffect(() => {
    //Get data immediately for the first time
    fetchData().then();
    const dataFetch = setInterval(fetchData, 500);

    return () => {
      clearInterval(dataFetch);
    }
  }, []);

  if (offline) {
    return (
      <FooterContainer offline>
        <Glass />
        <Offline>
          Op dit moment is de stream offline.
        </Offline>
      </FooterContainer>
    );
  }
    
  if(data != null &&
     data.icestats != null && 
     data.icestats.source != null &&
     data.icestats.source.title !== 'empty') {
    return(
      <FooterContainer>
        <Metadata data={data} />
        <Player theme={props.theme} />
      </FooterContainer>
    );
  }

  return (
    <FooterContainer>
      <Loading>
        <Loader 
          type='TailSpin'
          color={props.theme.colorText}
          height={80}
          width={80} />
      </Loading>
    </FooterContainer>
  );
};

export default Footer;




