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

const Offline = styled.div`
  margin-top: 5rem;
  margin-left: 4rem;
  font-size: 3.5rem;
  font-weight: 700;
  color: ${props => props.theme.colorTextError};

  @media only screen and (max-width: ${variables.screenWidth}) {
    margin-top: 3.5rem;
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

  useEffect(() => {
    const dataFetch = setInterval(fetchData, 500)

    return () => {
      clearInterval(dataFetch);
    }
  }, [])

  const fetchData = async () => {    
    try {
      const response = await fetch('https://stream.mondkapjefm.nl:8443/status-json.xsl');
      const json = await response.json();
      setData(json);
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
      <FooterContainer>
        <Offline>
          Op dit moment is de stream offline.
        </Offline>
      </FooterContainer>
    );
  }
};

export default Footer;




