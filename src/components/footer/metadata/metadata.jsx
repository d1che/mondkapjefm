import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import variables from '../../../styles/variables';
import Marquee from './marquee';

const MetadataWrapper = styled.div`
  position: absolute;
  width: 50rem;
  top: 0;
  bottom: 0;
  left: 4rem;
  font-size: 2.4rem;
  white-space: nowrap;
  overflow: hidden;

  @media only screen and (max-width: ${variables.screenWidth}) {
    width: 28rem;
    left: 2rem;
    padding-right 1rem;
    font-size: 1.5rem;
  }
`;

const NowPlayingWrapper = styled.div`
  padding-top: .5rem;
  font-size: 2rem;

  opacity: 0;
  animation-name: fadeIn;
  animation-duration: 1s;
  animation-direction: normal;
  animation-timing-function: ease-in;
  animation-fill-mode: forwards;

  @media only screen and (max-width: ${variables.screenWidth}) {
    font-size: 1.2rem;
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
  display: inline-block;
  margin-top: 2.2rem;
  padding-bottom: .3rem;
  overflow: hidden;
  font-weight: bold;
  color: ${props => props.theme.colorSongTitle};
  text-shadow: .1rem .1rem ${props => props.theme.colorPrimaryDark};
  border-bottom: 1px solid ${props => props.theme.colorPrimaryDark};
  
  opacity: 0;
  animation-name: fadeIn;
  animation-duration: 1s;
  animation-delay: .5s;
  animation-direction: normal;
  animation-timing-function: ease-in;
  animation-fill-mode: forwards;

  @media only screen and (max-width: ${variables.screenWidth}) {
    margin-top: 1.5rem;
  }
`;

const Title = styled.div`
  display: inline-block;
  position: absolute;
  left: 0;
  top: 8.5rem;
  padding-top: .2rem;
  overflow: hidden;
  font-style: italic;
  color: ${props => props.theme.colorSongTitle};
  text-shadow: .1rem .1rem ${props => props.theme.colorPrimaryDark};
  
  opacity: 0;
  animation-name: fadeIn;
  animation-duration: 1s;
  animation-delay: .5s;
  animation-direction: normal;
  animation-timing-function: ease-in;
  animation-fill-mode: forwards;

  @media only screen and (max-width: ${variables.screenWidth}) {
    top: 6rem;
  }
`;

const Ident = styled.div`
  margin-top: 4rem;
  font-size: 3rem;
  font-weight: bold;
  color: ${props => props.theme.colorPrimaryDark};
  text-shadow: .1rem .1rem ${props => props.theme.colorBackgroundDark};

  opacity: 0;
  animation-name: zoomOut;
  animation-duration: 1s;
  animation-delay: .7s;
  animation-direction: normal;
  animation-timing-function: ease-in;
  animation-fill-mode: forwards;

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
  animation-name: zoomOut;
  animation-duration: 1s;
  animation-delay: .7s;
  animation-direction: normal;
  animation-timing-function: ease-in;
  animation-fill-mode: forwards;

  @media only screen and (max-width: ${variables.screenWidth}) {
    font-size: 1.5rem;
    width: 35rem;
  }
`;

const getView = (data, wrapperRef, artistRef, titleRef) => {
  let wrapperWidth = 0;
  let artistWidth = 0;
  let titleWidth = 0;
  if (wrapperRef.current) wrapperWidth = wrapperRef.current.clientWidth;
  if (artistRef.current) artistWidth = artistRef.current.clientWidth;
  if (titleRef.current) titleWidth = titleRef.current.clientWidth;
  
  const info = data.icestats.source.title.toString();
  if (info.startsWith('0')) {
    const [dj, playlist] = info.substring(1).split('|')[0].split(';');
    const [artist, title] = info.substring(1).split('|')[1].split('-');
    return(
      <MetadataWrapper ref={wrapperRef}>
        <NowPlayingWrapper>
          <Announcement>{dj}</Announcement>
          <NowPlaying>Now playing:</NowPlaying>
          <Announcement style={{paddingLeft: '1rem'}}>{playlist}</Announcement>
        </NowPlayingWrapper>
        <Artist ref={artistRef}>
          {
            artistWidth > wrapperWidth ?
              <Marquee text={artist} />
            : 
              artist
          }
        </Artist>
        <Title ref={titleRef}>
          {
            titleWidth > wrapperWidth ?
              <Marquee text={title} />
            : 
              title
          }
        </Title>
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
  const wrapperRef = useRef(null);
  const artistRef = useRef(null);
  const titleRef = useRef(null);

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
    return getView(data, wrapperRef, artistRef, titleRef);
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
