import React from 'react';
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

const Metadata = ({data}) => {
  const [announcement, songTitle] = data.icestats.source.title.split('|');
  return(
    <MetadataWrapper>
      <NowPlaying>{!announcement.startsWith('Zet je radio') ? `${announcement} | Now playing:` : 'Mondkapje FM'}</NowPlaying>
      <SongTitle>{!announcement.startsWith('Zet je radio') ? songTitle : 'Zet je radio op 1.5 meter!'}</SongTitle>
    </MetadataWrapper>
  );
};

export default Metadata;
