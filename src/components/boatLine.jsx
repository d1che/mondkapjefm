import React from 'react';
import styled from 'styled-components';

const Line = styled.div`
  position: absolute;
  left: calc(47vw - 6.5rem);
  top: 6.3rem;
  width: 10rem;
  border-bottom: 2px solid ${props => props.theme.colorBoatLine};
  transform: translate(-11rem) rotate(-6deg);
`;

const BoatLine = () => {
  return(
    <Line>
    </Line>
  );
};

export default BoatLine;
