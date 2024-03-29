import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import variables from '../../../styles/variables';

import VolumeSlider from './volumeSlider';
import PlaybackButton from './playbackButton';

const PlayerContainer = styled.div`
  position: absolute;
  right: 0;
  top: 23%;
  opacity: 0;
  animation-name: fadeInPlayer;
  animation-duration: 1s;
  animation-delay: 2s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-timing-function: ease-in;
  animation-fill-mode: forwards;

  @keyframes fadeInPlayer {
    0% { 
      opacity: 0;
    }
    100% { 
      opacity: 1;
    }
  }

  @media only screen and (max-width: ${variables.screenWidth}) {
    top: 11%;
  }
`;

const StyledLoader = styled(Loader)`
  display: inline;
  position: absolute;
  right: 4rem;

  @media only screen and (max-width: ${variables.screenWidth}) {
    right: 2rem;
  }
`;

const Player = ({ theme , onConnection }) => {
  const defaultVolume = 70;
  const player = useRef(null);
  const [volume, setVolume] = useState(defaultVolume);

  // Updated by audio player
  const [playback, setPlayback] = useState(0);
  const [buffering, setBuffering] = useState(false);

  // Handle event listeners
  useEffect(() => {
    const p = player.current;

    // Event handlers
    const handlePlay = (event) => {
      setPlayback(1);
    };
    const handlePlaying = (event) => {
      setPlayback(1);
      setBuffering(false);
    };
    const handlePause = (event) => {
      setPlayback(0);
    };
    const handleWaiting = (event) => {
      setPlayback(2);
      setBuffering(true);
    };
    const handleError = (event) => console.warn(event);

    p.addEventListener('play', handlePlay);
    p.addEventListener('playing', handlePlaying);
    p.addEventListener('pause', handlePause);
    p.addEventListener('waiting', handleWaiting);
    p.addEventListener('error', handleError);

    return () => {
      p.removeEventListener('play', handlePlay);
      p.removeEventListener('playing', handlePlaying);
      p.removeEventListener('pause', handlePause);
      p.removeEventListener('waiting', handleWaiting);
      p.removeEventListener('error', handleError);
    };
  }, []);

  return (
    <PlayerContainer>
      <audio ref={player}>
        <source
          autoPlay
          src="../song.mp3"
          type="audio/mpeg"
          loop="true"
        />
        <track kind="captions" srcLang="nl" label="dummy_track" />
      </audio>
      <VolumeSlider
        initialValue={volume}
        onVolumeChange={(event, newValue) => {
          setVolume(newValue);
          player.current.volume = volume/100;
        }}
        onMute={(event) => {
          setVolume(0);
          player.current.volume = 0;
        }}
        onDefaultVolume={(event) => {
          setVolume(defaultVolume);
          player.current.volume = defaultVolume/100;
        }}
      />
      {buffering && <StyledLoader
        type='Oval'
        color={theme.colorText}
        height={80}
        width={80} />}
      <PlaybackButton
        playback={playback}
        onPlayPause={() => {
          playback ? player.current.pause() : player.current.play();
        }}
      />
    </PlayerContainer>
  );
};

export default Player;
