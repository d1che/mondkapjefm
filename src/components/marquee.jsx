import React from 'react';
import styled, { keyframes } from 'styled-components';

import variables from '../styles/variables';

const Scroller = styled.div`
    white-space: nowrap;
    animation-name: scroll;
    animation-duration: 8s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;

    @keyframes scroll {
      0% { transform: translateX(0) };
      100% { transform: translateX(-100%) };
    }
`;

const Marquee = ({ season }) => {
  return (
    <Scroller>
      Omg this text is immensely big, not n
    </Scroller>
  );
};

export default Marquee;
