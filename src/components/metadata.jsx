import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import variables from '../styles/variables';

const MetadataWrapper = styled.div`
  display: inline-block;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 2rem;
  font-size: 24px;
  padding-right 40rem;

  @media only screen and (max-width: calc(${variables.screenWidth} + 250px)) {
    font-size: 14px;
    left: 2rem;
    padding-right 5rem;
  }
`;

const NowPlaying = styled.div`
  color: ${props => props.theme.colorNowPlaying};
  margin-top: 4.4rem;

  @media only screen and (max-width: ${variables.screenWidth}) {
    margin-top: 3.3rem;
  }
`;

const SongTitle = styled.div`
  color: ${props => props.theme.colorSongTitle};

  @media only screen and (max-width: ${variables.screenWidth}) {
    word-wrap: break-word;
    max-width: 23rem;
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

  const [announcement, songTitle] = stats ? stats.icestats.source.title.split('|') : ['', ''];

  return(
    <MetadataWrapper>
      {(announcement !== '' && !announcement.startsWith('MondkapjeFM')) && 
      <NowPlaying>{`${announcement} - Now playing:`}</NowPlaying>}
      {songTitle !== '' && 
      <SongTitle>{!announcement.startsWith('MondkapjeFM') ? songTitle : announcement}</SongTitle>}
    </MetadataWrapper>
  );
};

export default Metadata;
