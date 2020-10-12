import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import variables from '../../../styles/variables';
//import Marquee from './marquee';

const MetadataWrapper = styled.div`
  display: inline-block;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 4rem;
  font-size: 2.4rem;

  @media only screen and (max-width: ${variables.screenWidth}) {
    font-size: calc(1rem + 0.7vw);
    left: 2rem;
    padding-right 1rem;
  }
`;

const NowPlayingWrapper = styled.div`
  padding-top: .5rem;
  margin-bottom: .1rem;
  font-size: 2rem;
  opacity: 0;
  animation-name: fadeInNowPlaying;
  animation-duration: 1s;
  animation-delay: 0s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-timing-function: ease-in;
  animation-fill-mode: forwards;

  @keyframes fadeInNowPlaying {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }

  @media only screen and (max-width: ${variables.screenWidth}) {
    font-size: calc(.8rem + .6vw);
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
  opacity: 0;
  animation-name: fadeInArtist;
  animation-duration: 1s;
  animation-delay: .5s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-timing-function: ease-in;
  animation-fill-mode: forwards;

  @keyframes fadeInArtist {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }

  @media only screen and (max-width: ${variables.screenWidth}) {
    margin-top: calc(2.6rem - 1.7vw);
    word-wrap: break-word;
  }
`;

const Title = styled.div`
  color: ${props => props.theme.colorSongTitle};
  font-style: italic;
  padding-top: .2rem;
  text-shadow: .1rem .1rem ${props => props.theme.colorPrimaryDark};
  opacity: 0;
  animation-name: fadeInTitle;
  animation-duration: 1s;
  animation-delay: .5s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-timing-function: ease-in;
  animation-fill-mode: forwards;

  @keyframes fadeInTitle {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }
`;

const Ident = styled.div`
  margin-top: 4rem;
  font-size: 3rem;
  font-weight: bold;
  color: ${props => props.theme.colorPrimaryDark};
  text-shadow: .1rem .1rem ${props => props.theme.colorBackgroundDark};
  opacity: 0;
  animation-name: slideInA;
  animation-duration: 1s;
  animation-delay: .7s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-timing-function: ease-in;
  animation-fill-mode: forwards;

  @keyframes slideInA {
    0% { 
      opacity: 0;
      transform: scale(2);
    }
    100% { 
      opacity: 1;
      transform: scale(1);
    }
  }

  @media only screen and (max-width: ${variables.screenWidth}) {
    margin-top: 2rem;
    font-size: 2.5rem
  }
`;

const Slogan = styled.div`
  font-size: 2rem;
  color: ${props => props.theme.colorSongTitle};
  text-shadow: .1rem .1rem ${props => props.theme.colorPrimaryDark};
  opacity: 0;
  animation-name: slideInB;
  animation-duration: 1s;
  animation-delay: .7s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-timing-function: ease-in;
  animation-fill-mode: forwards;

  @keyframes slideInB {
    0% { 
      opacity: 0;
      transform: scale(2);
    }
    100% { 
      opacity: 1;
      transform: scale(1);
    }
  }

  @media only screen and (max-width: ${variables.screenWidth}) {
    font-size: 1.5rem;
    width: 35rem;
  }
`;

const getView = (data) => {
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

const Metadata = () => {
  const [data, setData] = useState(null);
  const timeout = useRef(0);

  useEffect(() => {
    let delay;

    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://stream.mondkapjefm.nl:8443/status-json.xsl');
        const json = await response.json();
        // If this is the first run, set the data immediately
        delay = setTimeout(setData, timeout.current, json);
      } catch(err) {
        console.warn("Can't load radio metadata.");
      }
    }

    //Get data immediately for the first time
    fetchData().then();
    timeout.current = 6000;
    const dataFetch = setInterval(fetchData, 500);

    return () => {
      clearInterval(dataFetch);
      clearTimeout(delay);
    }
  }, []);

  if (data != null &&
     data.icestats != null && 
     data.icestats.source != null &&
     data.icestats.source.title !== 'empty') {
    return getView(data);
  } else {
    return(
      <MetadataWrapper>
        <Ident>
          Mondkapje FM
        </Ident>
        <Slogan>
          Welkom terug!
        </Slogan>
      </MetadataWrapper>
    );
  }
};

export default Metadata;
