import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

import variables from '../styles/variables';

const MetadataWrapper = styled.div`
  display: inline-block;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 15rem;
  font-size: 24px;

  @media only screen and (max-width: ${variables.screenWidth}) {
    font-size: 12px;
    left: 12rem;
  }
`;

const NowPlaying = styled.div`
  color: ${props => props.theme.colorNowPlaying};
  margin-top: 4.5rem;

  @media only screen and (max-width: ${variables.screenWidth}) {
    margin-top: 3.5rem;
  }
`;

const Title = styled.div`
  color: ${props => props.theme.colorSongTitle};

  @media only screen and (max-width: ${variables.screenWidth}) {
    max-width: 25rem;
  }
`;

const Metadata = () => {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      fetch('https://stream.mondkapjefm.nl:8443/status-json.xsl')
      .then(r => r.json())
      .then(r => {setStats(r)});
    }, 1000)

    return () => {
      clearInterval(interval);
    }
  }, [])

  return(
    <MetadataWrapper>
      <NowPlaying>Now playing:</NowPlaying>
      {stats != null && <Title>{stats.icestats.source.title}</Title>}
    </MetadataWrapper>
  );
};

export default Metadata;
