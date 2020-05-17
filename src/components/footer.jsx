import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'

import variables from '../styles/variables';

import Metadata from './metadata';
import Player from './player';

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
  backdrop-filter: blur(5px);

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

const Offline = styled.div`
  position: absolute;
  display: inline-block;
  top: 5rem;
  left: 50%;
  transform: translate(-50%);
  padding-left: .4rem;
  padding-right: .3rem;
  background-color: ${props => props.theme.colorText}aa;
  font-size: 3rem;
  font-weight: 700;
  white-space: nowrap;
  color: ${props => props.theme.colorTextError};
  box-shadow: 0 0 .5rem ${props => props.theme.colorText};

  @media only screen and (max-width: ${variables.screenWidth}) {
    top: 3.5rem;
    font-size: 2rem;
  }
`;

const DEFAULT_DATA = {
  icestats: {
    source: {
      title: 'empty',
    },
  },
}

const Footer = (props) =>  {
  const [data, setData] = useState(DEFAULT_DATA);
  const [offline, setOffline] = useState(false);
  let timeout = 0;

  const fetchData = async () => {    
    try {
      const response = await fetch('https://stream.mondkapjefm.nl:8443/status-json.xsl');
      const json = await response.json();
      // If this is the first run, set the data immediately
      setTimeout(setData, timeout, json);
      setOffline(false);
    } catch(err) {
      setData(DEFAULT_DATA);
      setOffline(true);
      console.warn(err);
    }
  }

  //Get data immediately for the first time
  fetchData();
  timeout = 6000;

  useEffect(() => {
    const dataFetch = setInterval(fetchData, 500)

    return () => {
      clearInterval(dataFetch);
    }
  })

  if (offline) {
    return (
      <FooterContainer offline>
        <Offline>
          Op dit moment is de stream offline.
        </Offline>
      </FooterContainer>
    );
  } else if(data.icestats != null && 
     data.icestats.source != null &&
     data.icestats.source.title !== 'empty') {
    return(
      <FooterContainer>
        <Metadata data={data} />
        <Player theme={props.theme} />
      </FooterContainer>
    );
  } else {
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
  }
};

export default Footer;




