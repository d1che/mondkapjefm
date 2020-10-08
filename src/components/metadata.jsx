import React from 'react';
import styled from 'styled-components';

import variables from '../styles/variables';
//import Marquee from './marquee';

const MetadataWrapper = styled.div`
  display: inline-block;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 4rem;
  font-size: 2.4rem;

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
  padding-right: 1rem;
  color: ${props => props.theme.colorAnnouncement};
  font-weight: bold;
  text-shadow: .1rem .1rem ${props => props.theme.colorPrimaryLight};
`;

const NowPlaying = styled.span`
  padding-top: .5rem;
  padding-left: 1rem;
  font-weight: bold;
  color: ${props => props.theme.colorNowPlaying};
  border-left: 1px solid ${props => props.theme.colorPrimaryDark};
  text-shadow: .1rem .1rem ${props => props.theme.colorPrimaryDark};
`;

const Artist = styled.div`
  color: ${props => props.theme.colorSongTitle};
  margin-top: 2rem;
  font-weight: bold;
  padding-bottom: .3rem;
  border-bottom: 1px solid ${props => props.theme.colorPrimaryDark};
  text-shadow: .1rem .1rem ${props => props.theme.colorPrimaryDark};

  @media only screen and (max-width: ${variables.screenWidth}) {
    margin-top: calc(2.7rem - 2vw);
    word-wrap: break-word;
  }
`;

const Title = styled.div`
  color: ${props => props.theme.colorSongTitle};
  font-style: italic;
  padding-top: .2rem;
  text-shadow: .1rem .1rem ${props => props.theme.colorPrimaryDark};
`;

const Ident = styled.div`
  margin-top: 4rem;
  font-size: 3rem;
  font-weight: bold;
  color: ${props => props.theme.colorPrimaryDark};
  text-shadow: .1rem .1rem ${props => props.theme.colorBackgroundDark};

  @media only screen and (max-width: ${variables.screenWidth}) {
    margin-top: 2rem;
    font-size: 2.5rem
  }
`;

const Slogan = styled.div`
  font-size: 2rem;
  color: ${props => props.theme.colorSongTitle};
  text-shadow: .1rem .1rem ${props => props.theme.colorPrimaryDark};

  @media only screen and (max-width: ${variables.screenWidth}) {
    font-size: 1.5rem;
    width: 35rem;
  }
`;

const Metadata = ({data}) => {
  const info = data.icestats.source.title.toString();
  if (info.startsWith('0')) {
    const [dj, playlist] = info.substring(1).split('|')[0].split(';');
    const [artist, title] = info.substring(1).split('|')[1].split('-');
    return(
      <MetadataWrapper>
        <NowPlayingWrapper>
          <Announcement>{dj}</Announcement>
          <NowPlaying>Now playing:</NowPlaying>
          <Announcement style={{paddingLeft: '1rem'}}>{playlist}</Announcement>
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
          {info.startsWith('1') ? info.substring(1) : 'Zet je radio op 1.5 meter!'}
        </Slogan>
      </MetadataWrapper>
    )
  }
};

export default Metadata;
