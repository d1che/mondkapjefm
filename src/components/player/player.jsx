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
  right: 4rem;

  @media only screen and (max-width: ${variables.screenWidth}) {
    display: none;
  }
`;

const Player = ({theme}) => {
  const defaultVolume = 70;
  const [playback, setPlayback] = useState(true);
  const [volume, setVolume] = useState(defaultVolume);

  // Updated by ReactPlayer
  const [buffering, setBuffering] = useState(false);

  return (
    <PlayerContainer>
      <ReactPlayer 
        url='https://stream.mondkapjefm.nl:8443/stream'
        playing={playback} 
        volume={volume/100}
        width='0'
        height='0'
        playsinline
        onPlay={() => setBuffering(true)}
        onBuffer={() => setBuffering(true)}
        onBufferEnd={() => setBuffering(false)}
        onError={() => {
          console.warn("Autoplay failed. (possibly due to privacy settings)");
        }}
      />
      <VolumeSlider 
        initialValue={volume}
        onVolumeChange={(event, newValue) => setVolume(newValue)}
        onMute={(event) => setVolume(0)}
        onDefaultVolume={(event) => setVolume(defaultVolume)}/>
      {buffering && <StyledLoader
        type='Oval'
        color={theme.colorText}
        height={80}
        width={80} />}
      <PlaybackButton
        playback={playback}
        onPlayPause={(event) => setPlayback(!playback)}
      />
    </PlayerContainer>
  );
};

export default Player;
