import React from 'react';
import styled from 'styled-components';

const Quote = styled.div`
  position: absolute;
  left: calc(47vw - 6.5rem);
  top: 4.3rem;
  font-weight: bold;
  font-size: 2rem;
  white-space: nowrap;
  overflow: hidden;
  max-width: calc(53vw + 6.5rem);
  transform-origin: 0% 100%;
  transform: rotate(-4deg);
  color: black;
  z-index -1;
`;

const BoatText = ({quote}) => {
  return (
    <Quote>
      {quote}
    </Quote>
  );
};

export default BoatText;
