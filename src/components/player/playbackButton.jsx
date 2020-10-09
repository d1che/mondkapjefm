import React from 'react';
import styled from 'styled-components';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';

import variables from '../../styles/variables';

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

const PlaybackButton = (props) => {
  return(
    <PlaybackButtonWrapper
      onClick={props.onPlayPause}>
        {
          props.playback ?
            <PauseCircleFilledIcon style={{fontSize: '8rem'}} />
          :
            <PlayCircleFilledIcon style={{fontSize: '8rem'}}/>
        }
    </PlaybackButtonWrapper>
  );
};

export default PlaybackButton;
