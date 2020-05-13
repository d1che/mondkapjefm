import React from 'react';
import styled from 'styled-components';
import InstagramIcon from '@material-ui/icons/Instagram';

const IconContainer = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background-color: ${props => props.theme.colorBackgroundSocialBar};
  box-shadow: 0 0 15px ${props => props.theme.colorBackgroundSocialBar};

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
