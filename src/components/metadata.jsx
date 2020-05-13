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

const Offline = styled.div`
  margin-top: 5rem;
  font-size: 3.5rem;
  font-weight: 700;
  color: ${props => props.theme.colorTextError};

  @media only screen and (max-width: ${variables.screenWidth}) {
    margin-top: 3.5rem;
    font-size: 2rem;
  }
`;

const Metadata = ({stats}) => {
  const [announcement, songTitle] = stats ? stats.source.title.split('|') : ['', ''];

  if (stats) {
    return(
      <MetadataWrapper>
        <NowPlaying>{!announcement.startsWith('Zet je radio') ? `${announcement} - Now playing:` : 'Mondkapje FM'}</NowPlaying>
        <SongTitle>{!announcement.startsWith('Zet je radio') ? songTitle : 'Zet je radio op 1.5 meter!'}</SongTitle>
      </MetadataWrapper>
    );
  } else {
    return(
      <MetadataWrapper>
        <Offline>
          Op dit moment zijn we off air
        </Offline>
      </MetadataWrapper>
    );
  }
};

export default Metadata;
