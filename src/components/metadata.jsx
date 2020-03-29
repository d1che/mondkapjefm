import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import variables from '../styles/variables';

const MetadataWrapper = styled.div`
  display: inline-block;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 4rem;
  font-size: 2.4rem;
  padding-right 40rem;

  @media only screen and (max-width: ${variables.screenWidth}) {
    font-size: 1.4rem;
    left: 2rem;
    padding-right 1rem;
  }
`;

const NowPlaying = styled.div`
  color: ${props => props.theme.colorNowPlaying};
  margin-top: 4.4rem;

  @media only screen and (max-width: ${variables.screenWidth}) {
    margin-top: 3.2rem;
  }
`;

const SongTitle = styled.div`
  color: ${props => props.theme.colorSongTitle};

  @media only screen and (max-width: ${variables.screenWidth}) {
    word-wrap: break-word;
    width: 35rem;
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
      <NowPlaying>{!announcement.startsWith('MondkapjeFM') ? `${announcement} - Now playing:` : ''}</NowPlaying>
      <SongTitle>{!announcement.startsWith('MondkapjeFM') ? songTitle : announcement}</SongTitle>
    </MetadataWrapper>
  );
};

export default Metadata;
