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
    font-size: calc(0.8rem + 1.1vw);
    left: 2rem;
    padding-right 1rem;
  }
`;

const NowPlayingWrapper = styled.div`
  padding-top: .5rem;
  margin-bottom: .1rem;
  font-size: 2rem;

  @media only screen and (max-width: ${variables.screenWidth}) {
    font-size: calc(0.5rem + 1vw);
  }
`;

const Announcement = styled.span`
  padding-top: .5rem;
  padding-right: .5rem;
  color: ${props => props.theme.colorAnnouncement};
  font-weight: bold;
  border-right: 1px solid ${props => props.theme.colorPrimaryDark};
`;

const NowPlaying = styled.span`
  padding-top: .5rem;
  padding-left: .5rem;
  color: ${props => props.theme.colorNowPlaying};
`;

const Artist = styled.div`
  color: ${props => props.theme.colorSongTitle};
  margin-top: 2rem;
  font-weight: bold;
  padding-bottom: .3rem;
  border-bottom: 1px solid ${props => props.theme.colorPrimaryDark};

  @media only screen and (max-width: ${variables.screenWidth}) {
    margin-top: calc(2.7rem - 2vw);
    word-wrap: break-word;
  }
`;

const Title = styled.div`
  color: ${props => props.theme.colorSongTitle};
  font-style: italic;
  padding-top: .2rem;

  @media only screen and (max-width: ${variables.screenWidth}) {
    word-wrap: break-word;
  }
`;

const Ident = styled.div`
  margin-top: 4rem;
  font-size: 3rem;
  font-weight: bold;
  color: ${props => props.theme.colorPrimaryDark};

  @media only screen and (max-width: ${variables.screenWidth}) {
    margin-top: 2rem;
    font-size: 2.5rem
  }
`;

const Slogan = styled.div`
  font-size: 2rem;
  color: ${props => props.theme.colorSongTitle};

  @media only screen and (max-width: ${variables.screenWidth}) {
    font-size: 1.5rem;
    width: 35rem;
  }
`;

const Metadata = ({data}) => {
  if (!data.icestats.source.title.startsWith('Zet je radio')) {
    const announcement = data.icestats.source.title.split('|')[0];
    const [artist, title] = data.icestats.source.title.split('|')[1].split('-'); 
    return(
      <MetadataWrapper>
        <NowPlayingWrapper>
          <Announcement>{announcement.trim()}</Announcement>
          <NowPlaying>Now playing:</NowPlaying>
        </NowPlayingWrapper>
        <Artist>{artist}</Artist>
        <Title>{title}</Title>
      </MetadataWrapper>
    );
  } else {
    return(
      <MetadataWrapper>
        <Ident>
          Mondkapje FM
        </Ident>
        <Slogan>
          Zet je radio op 1.5 meter!
        </Slogan>
      </MetadataWrapper>
    )
  }
};

export default Metadata;
