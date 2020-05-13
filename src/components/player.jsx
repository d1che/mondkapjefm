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
  top: 23%;
  border-left: 1px solid ${props => props.theme.colorBackgroundDark}33;

  @media only screen and (max-width: ${variables.screenWidth}) {
    top: 11%;
    border-left: none;
  }
`;

const InlineBlock = styled.span`
  display: inline-block;
  vertical-align: middle;
`;

const Volume = styled.span`
  @media only screen and (max-width: ${variables.screenWidth}) {
    display: none;
  }
`;

const Play = styled.span`
  transition: color .5s;
  &:hover {
    color: ${props => props.theme.colorPrimaryLight};
  }
`;

const Pause = styled.span`
  transition: color .5s;
  &:hover {
    color: ${props => props.theme.colorPrimaryLight};
  }
`;

const Player = ({stats}) => {
  const [playing, togglePlaying] = useState(false);
  const [volume, setVolume] = useState(70);

  const updateVolume = (event, newValue) => {
    setVolume(newValue);
  };

  const mute = () => setVolume(0)

  if (stats) {
    return (
      <PlayerContainer>
        <Stream status={playing} volume={volume} />
        <Volume>
          <InlineBlock
            style={{paddingLeft: '2rem'}}>
            <VolumeDown 
              style={{ fontSize: '4rem' }} 
              onClick={mute}/>
          </InlineBlock>
          <InlineBlock 
            style={{width: '150px', paddingLeft: '1rem', paddingRight: '1rem'}}>
            <Slider 
              value={volume} 
              onChange={updateVolume} 
              aria-labelledby="continuous-slider" 
              style={{ color: '#ffffff' }} />
          </InlineBlock>
          <InlineBlock>
            <VolumeUp style={{ fontSize: '4rem' }} />
          </InlineBlock>
        </Volume>
        <InlineBlock style={{ paddingLeft: '4rem', paddingRight: '4rem' }}>
          {
            playing ? 
            <Pause onClick={() => togglePlaying(false)}>
              <PauseCircleFilledIcon style={{ fontSize: '8rem' }} />
            </Pause> 
            : 
            <Play onClick={() => togglePlaying(true)}>
              <PlayCircleFilledIcon style={{ fontSize: '8rem' }}/>
            </Play>
          }
        </InlineBlock>
      </PlayerContainer>
    );
  } else {
    return(
      <PlayerContainer>
      </PlayerContainer>
    )
  }
};

export default Player;
