import React from 'react';
import styled from 'styled-components';
import { VolumeDown, VolumeUp } from '@material-ui/icons';
import Slider from '@material-ui/core/Slider';

import variables from '../../../styles/variables';

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

const VolumeSlider = ({ initialValue, onVolumeChange, onMute, onDefaultVolume }) => {
  return(
    <Volume>
      <InlineBlock
        style={{paddingLeft: '2rem'}}>
        <VolumeDown 
          style={{fontSize: '4rem'}} 
          onClick={onMute} />
      </InlineBlock>
      <InlineBlock 
        style={{width: '150px', paddingLeft: '1rem', paddingRight: '1rem'}}>
        <Slider 
          value={initialValue}
          onChange={onVolumeChange}
          aria-labelledby="continuous-slider" 
          style={{color: '#ffffff'}} />
      </InlineBlock>
      <InlineBlock>
        <VolumeUp 
          style={{fontSize: '4rem'}}
          onClick={onDefaultVolume} />
      </InlineBlock>
    </Volume>
  );
};

export default VolumeSlider;
