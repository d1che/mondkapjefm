import React from 'react';
import styled, { keyframes } from 'styled-components';

const ScrollAnimation = keyframes`
  0% { transform: translateX(0); }
  50% {transform: translateX(-120%); }
  100% { transform: translateX(-120%); }
`;

const Scroller = styled.span`
    display: inline-block;
    white-space: nowrap;
    animation-name: ${ScrollAnimation};
    animation-duration: 10s;
    animation-delay: 5s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;

    &::after {
      position: absolute;
      display: inline-block;
      content: ${props => `"${props.text}"`};
      transform: translateX(20%);
    }
`;

const Marquee = ({ text }) => {
  return (
    <Scroller text={text}>
      {text}
    </Scroller>
  );
};

export default Marquee;
