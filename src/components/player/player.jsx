import React, { useState } from 'react';
import styled from 'styled-components';
import ReactPlayer from 'react-player';
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import variables from '../../styles/variables';

import VolumeSlider from './volumeSlider';
import PlaybackButton from './playbackButton';

const PlayerContainer = styled.div`
  position: absolute;
  right: 0;
  top: 23%;

  @media only screen and (max-width: ${variables.screenWidth}) {
    top: 11%;
  }
`;

const StyledLoader = styled(Loader)`
  display: inline;
  position: absolute;
  left: -10rem;

  @media only screen and (max-width: ${variables.screenWidth}) {
    display: none;
  }
`;

const Player = ({theme}) => {
  const defaultVolume = 70;
  const [playing, togglePlaying] = useState(false);
  const [volume, setVolume] = useState(defaultVolume);

  const handleVolume = (event, newValue) => setVolume(newValue);
  const handleMute = (event) => setVolume(0);
  const handleDefaultVolume = (event) => setVolume(defaultVolume);
  const handlePlayback = (event) => togglePlaying(!playing);

  return (
    <PlayerContainer>
      <ReactPlayer 
        url='https://stream.mondkapjefm.nl:8443/stream'
        playing={playing} 
        volume={volume/100}
        width='0'
        height='0'
        playsinline
      />
      {playing && <StyledLoader
        type='Bars'
        color={theme.colorText}
        height={80}
        width={80} />}
      <VolumeSlider 
        initialValue={volume}
        onVolumeChange={handleVolume}
        onMute={handleMute}
        onDefaultVolume={handleDefaultVolume}/>
      <PlaybackButton
        playing={playing}
        onPlayPause={handlePlayback}
      />
    </PlayerContainer>
  );
};

export default Player;
