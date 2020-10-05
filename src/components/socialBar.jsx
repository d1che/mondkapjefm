import React from 'react';
import styled from 'styled-components';
import InstagramIcon from '@material-ui/icons/Instagram';

const IconContainer = styled.div`
  position: absolute;
  top: 0rem;
  right: 0rem;
  padding-top: 1.2rem;
  padding-left: 1rem;
  padding-bottom: 1rem;
  padding-right: 1rem;
  background: radial-gradient(${props => props.theme.colorBackgroundSocialBar} 30%, ${props => props.theme.colorPrimaryDark}00 70%);

  a {
    transition: color .5s;
    color: ${props => props.theme.colorPrimaryDark};
  }

  a:hover {
    color: ${props => props.theme.colorMediaButton};    
  }
`;

const SocialBar = () => {
  return (
    <IconContainer>
      <a href="https://www.instagram.com/mondkapjefm" rel="noopener noreferrer" target="_blank">
        <InstagramIcon style={{fontSize: '4rem'}} />
      </a>
    </IconContainer>
  );
};

export default SocialBar;
