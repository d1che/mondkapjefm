import React from 'react';
import styled from 'styled-components';

import variables from '../styles/variables';

const CreditWrapper = styled.div`
  position: absolute;
  bottom: 14.5rem;
  right: 0rem;
  padding-top: 1rem;
  padding-right: 1rem;
  padding-bottom: 1rem;
  padding-left: 1rem;
  color: ${props => props.theme.colorBackgroundDark}bb;
  font-size: 12px;
  font-weight: bold;
  text-align: right;
  text-shadow: 1px 0 0 ${props => props.theme.colorBackgroundLight}66,
               -1px 0 0 ${props => props.theme.colorBackgroundLight}66,
               0 1px 0 ${props => props.theme.colorBackgroundLight}66,
               0 -1px 0 ${props => props.theme.colorBackgroundLight}66;

  a {
    color: ${props => props.theme.colorBackgroundDark}bb;
  }

  @media only screen and (max-width: ${variables.screenWidth}) {
    bottom: 9.5rem;
    font-size: 9px;
  }
`;

const PictureCredit = ({ theme }) => {
  return (
    <CreditWrapper>Background by <a href={theme.backgroundProfile} rel="noopener noreferrer" target="_blank">{theme.backgroundCreator}</a> on <a href="https://unsplash.com/" rel="noopener noreferrer" target="_blank">Unsplash</a>
    </CreditWrapper>
  );
};

export default PictureCredit;
