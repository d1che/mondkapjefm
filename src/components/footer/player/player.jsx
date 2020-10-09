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

const Player = ({ theme, onOnline }) => {
  const defaultVolume = 70;
  const player = useRef(null);
  const [volume, setVolume] = useState(defaultVolume);

  // Updated by ReactPlayer
  const [playback, setPlayback] = useState(false);
  const [buffering, setBuffering] = useState(false);

  // Handle event listeners
  useEffect(() => {
    const p = player.current;

    // Event handlers
    //const handleLoadedMetadata = (event) => console.log(event);
    const handleCanPlay = (event) => {
      //console.log(event);
    };
    const handlePlay = (event) => {
      //console.log(event);
      setBuffering(true);
    };
    const handlePlaying = (event) => {
      //console.log(event);
      setPlayback(true);
      setBuffering(false);
    };
    const handlePause = (event) => {
      //console.log(event);
      setPlayback(false);
    }
    const handleWaiting = (event) => {
      //console.log(event);
      setPlayback(false);
      setBuffering(true);
    };
    const handleStalled = async (event) => {
      //console.log(event);
      onOnline(false);
    };
    //const handleSuspended = (event) => console.log(event);
    //const handleTimeUpdate = (event) => console.log(event);

    //p.addEventListener('loadedmetadata', handleLoadedMetadata);
    p.addEventListener('canplay', handleCanPlay);
    p.addEventListener('play', handlePlay);
    p.addEventListener('playing', handlePlaying);
    p.addEventListener('pause', handlePause);
    p.addEventListener('waiting', handleWaiting);
    p.addEventListener('stalled', handleStalled);
    //p.addEventListener('suspended', handleSuspended);
    //p.addEventListener('timeupdate', handleTimeUpdate);

    return () => {
      //p.removeEventListener('loadedmetadata', handleLoadedMetadata);
      p.removeEventListener('canplay', handleCanPlay);
      p.removeEventListener('play', handlePlay);
      p.removeEventListener('playing', handlePlaying);
      p.removeEventListener('pause', handlePause);
      p.removeEventListener('waiting', handleWaiting);
      p.removeEventListener('stalled', handleStalled);
      //p.removeEventListener('suspended', handleSuspended);
      //p.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, [onOnline]);

  return (
    <PlayerContainer>
      <audio ref={player}>
        <source
          autoPlay
          src="https://stream.mondkapjefm.nl:8443/stream"
          type="audio/mpeg"
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
