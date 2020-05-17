import React, { useState } from 'react';
import styled from 'styled-components';
import { VolumeDown, VolumeUp } from '@material-ui/icons';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';
import Slider from '@material-ui/core/Slider';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'

import variables from '../styles/variables';

import Stream from './stream';

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

const InlineBlock = styled.span`
  display: inline-block;
  vertical-align: middle;
`;

const Volume = styled.span`
  padding-top: 3.5rem;
  padding-bottom: 3.5rem;
  border-left: 1px solid ${props => props.theme.colorPrimaryLight};

  @media only screen and (max-width: ${variables.screenWidth}) {
    display: none;
  }
`;

const PlaybackButtonsWrapper = styled.span`
  display: inline-block;
  vertical-align: middle;
  margin-left: 4rem;
  margin-right: 4rem;

  @media only screen and (max-width: ${variables.screenWidth}) {
    margin-left: 2rem;
    margin-right: 2rem;
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

const Player = ({theme}) => {
  const [playing, togglePlaying] = useState(false);
  const [volume, setVolume] = useState(70);

  const updateVolume = (event, newValue) => {
    setVolume(newValue);
  };

  const mute = () => setVolume(0)
  
  return (
    <PlayerContainer>
      <Stream status={playing} volume={volume} />
      {playing && <StyledLoader
        type='Bars'
        color={theme.colorText}
        height={80}
        width={80} />}
      <Volume>
        <InlineBlock
          style={{paddingLeft: '2rem'}}>
          <VolumeDown 
            style={{fontSize: '4rem'}} 
            onClick={mute}/>
        </InlineBlock>
        <InlineBlock 
          style={{width: '150px', paddingLeft: '1rem', paddingRight: '1rem'}}>
          <Slider 
            value={volume} 
            onChange={updateVolume} 
            aria-labelledby="continuous-slider" 
            style={{color: '#ffffff'}} />
        </InlineBlock>
        <InlineBlock>
          <VolumeUp style={{fontSize: '4rem'}} />
        </InlineBlock>
      </Volume>
      <PlaybackButtonsWrapper>
        {
          playing ? 
          <Pause onClick={() => togglePlaying(false)}>
            <PauseCircleFilledIcon style={{fontSize: '8rem'}} />
          </Pause> 
          : 
          <Play onClick={() => togglePlaying(true)}>
            <PlayCircleFilledIcon style={{fontSize: '8rem'}}/>
          </Play>
        }
      </PlaybackButtonsWrapper>
    </PlayerContainer>
  );
};

export default Player;
