import React, { useState } from 'react';
import styled from 'styled-components';
import { VolumeDown, VolumeUp } from '@material-ui/icons';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';
import Slider from '@material-ui/core/Slider';

import variables from '../styles/variables';

import Stream from './stream';

const PlayerContainer = styled.div`
  position: absolute;
  right: 0;
  top: 25%;

  @media only screen and (max-width: ${variables.screenWidth}) {
    top: 15%;
  }
`;

const Volume = styled.span`
  @media only screen and (max-width: ${variables.screenWidth}) {
    display: none;
  }
`;

const InlineBlock = styled.span`
  display: inline-block;
  vertical-align: middle;
`;

const Play = styled.span`
`;

const Pause = styled.span`
`;

const Player = () => {
  const [playing, togglePlaying] = useState(false);
  const [volume, setVolume] = useState(70);

  const updateVolume = (event, newValue) => {
    setVolume(newValue);
  };

  return (
    <PlayerContainer>
      <Stream status={playing} volume={volume} />
      <Volume>
        <InlineBlock><VolumeDown style={{ fontSize: '4rem' }} /></InlineBlock>
        <InlineBlock style={{width: '150px', paddingLeft: '1rem', paddingRight: '1rem'}}><Slider value={volume} onChange={updateVolume} aria-labelledby="continuous-slider" style={{ color: '#ffffff' }} /></InlineBlock>
        <InlineBlock><VolumeUp style={{ fontSize: '4rem' }} /></InlineBlock>
      </Volume>
      <InlineBlock style={{ paddingLeft: '1rem', paddingRight: '2rem' }}>
        {
          playing ? 
          <Pause onClick={() => togglePlaying(false)}>
            <PauseCircleFilledIcon style={{ fontSize: '7rem' }} />
          </Pause> 
          : 
          <Play onClick={() => togglePlaying(true)}>
            <PlayCircleFilledIcon style={{ fontSize: '7rem' }} />
          </Play>
        }
      </InlineBlock>
    </PlayerContainer>
  );
};

export default Player;
