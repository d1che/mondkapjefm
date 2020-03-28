import React from 'react';
import styled from 'styled-components';

const CreditWrapper = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  color: ${props => props.theme.colorPrimaryDark};
  font-size: 12px;
  text-align: right;
`;

const FirstLine = styled.span`
  display block;
`;

const SecondLine = styled.span`
  display: block;
`;

const PictureCredit = () => {
  return (
    <CreditWrapper>
      <FirstLine>
      Background by <a 
        href="https://unsplash.com/@jakebradley" 
        rel="noopener noreferrer" 
        target="_blank">
          Jake Bradley
        </a>
      </FirstLine>
      <SecondLine> 
      on <a 
        href="https://unsplash.com/"
        rel="noopener noreferrer"
        target="_blank">
          Unsplash
        </a>
      </SecondLine>
    </CreditWrapper>
  );
};

export default PictureCredit;
