import React from 'react';
import styled from 'styled-components';

import variables from '../styles/variables';

const CreditWrapper = styled.div`
  position: absolute;
  bottom: 15.5rem;
  right: .5rem;
  padding-left: .3rem;
  padding-right: .3rem;
  color: ${props => props.theme.colorBackgroundDark}88;
  font-size: 12px;
  font-weight: bold;
  text-align: right;
  background-color: ${props => props.theme.colorText}77;
  box-shadow: 0 0 5px ${props => props.theme.colorText};

  a {
    color: ${props => props.theme.colorBackgroundDark}aa;
  }

  @media only screen and (max-width: ${variables.screenWidth}) {
    bottom: 10.5rem;
    font-size: 9px;
  }
`;

const PictureCredit = () => {
  return (
    <CreditWrapper>Background by <a href="https://unsplash.com/@jakebradley" rel="noopener noreferrer" target="_blank">Jake Bradley</a> on <a href="https://unsplash.com/" rel="noopener noreferrer" target="_blank">Unsplash</a>
    </CreditWrapper>
  );
};

export default PictureCredit;
