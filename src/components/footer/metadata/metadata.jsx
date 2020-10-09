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

  const fetchData = async () => {
    try {
      const response = await fetch(
        'https://stream.mondkapjefm.nl:8443/status-json.xsl');
      const json = await response.json();
      // If this is the first run, set the data immediately
      setTimeout(setData, timeout.current, json);
    } catch(err) {
      console.warn(err);
    }
  }

  useEffect(() => {
    //Get data immediately for the first time
    fetchData().then();
    timeout.current = 6000;
    const dataFetch = setInterval(fetchData, 500);

    return () => {
      clearInterval(dataFetch);
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
