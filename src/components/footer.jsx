import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

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

const Footer = () =>  {
  const [data, setData] = useState(DEFAULT_DATA);
  const [firstRun, setFirstRun] = useState(true);

  useEffect(() => {
    //Get data immediately for the first time
    if(firstRun) {
      fetchData();
      setFirstRun(false);
    };
    const dataFetch = setInterval(fetchData, 500)

    return () => {
      clearInterval(dataFetch);
    }
  }, [firstRun])

  const fetchData = async () => {    
    try {
      const response = await fetch('https://stream.mondkapjefm.nl:8443/status-json.xsl');
      const json = await response.json();
      // If this is the first run, set the data immediately
      firstRun ? setData(json) : setTimeout(setData, 5000, json);
    } catch(err) {
      setData(DEFAULT_DATA);
      console.warn(err);
    }
  }

  if(data.icestats != null && 
     data.icestats.source != null &&
     data.icestats.source.title !== 'empty') {
    return(
      <FooterContainer>
        <Metadata data={data} />
        <Player />
      </FooterContainer>
    );
  } else {
    return (
      <FooterContainer offline>
        <Offline>
          Op dit moment is de stream offline.
        </Offline>
      </FooterContainer>
    );
  }
};

export default Footer;




