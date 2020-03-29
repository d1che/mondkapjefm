import React, { useEffect } from 'react';
import styled from 'styled-components';

import variables from '../styles/variables';

const BoatTextWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  color: black;
`;

const Quote = styled.div`
  position: relative;
  font-weight: bold;
  font-size: 2rem;
`;

const PictureCredit = () => {

  let windowWidth = window.innerWidth; 
  let windowHeight = window.innerHeight;

  useEffect(() => {
    function handleResize() {
      windowWidth = window.innerWidth;
      windowHeight = window.innerHeight;
    }

    window.addEventListener('resize', handleResize);
  }, []);

  console.log(windowWidth);
  console.log(windowHeight);

  return (
    <BoatTextWrapper>
      <Quote>tief op!</Quote>
    </BoatTextWrapper>
  );
};

export default PictureCredit;
