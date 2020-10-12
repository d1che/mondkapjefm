import React from 'react';
import styled from 'styled-components';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';

import variables from '../../../styles/variables';

const PlaybackButtonWrapper = styled.span`
  display: inline-block;
  vertical-align: middle;
  margin-left: 4rem;
  margin-right: 4rem;
  transition: color .5s;
  &:hover {
    color: ${props => props.theme.colorPrimaryLight};
  }

  @media only screen and (max-width: ${variables.screenWidth}) {
    margin-left: 2rem;
    margin-right: 2rem;
  }
`;

const Placeholder = styled.span`
  display: inline-block;
  width: 8rem;
  height: 8rem;
`;

const PlaybackButton = ({ onPlayPause, playback }) => {
  let button;

  if (playback === 0) {
    button = <PlayCircleFilledIcon style={{fontSize: '8rem'}}/>
  }
  else if (playback === 1) {
    button = <PauseCircleFilledIcon style={{fontSize: '8rem'}} />
  }
  else {
    button = <Placeholder />
  }

  return(
    <PlaybackButtonWrapper
      onClick={onPlayPause}>
      {button}
    </PlaybackButtonWrapper>
  );
};

export default PlaybackButton;
