import React from 'react';
import styled from 'styled-components';

const CreditWrapper = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  color: ${props => props.theme.colorPrimaryDark};
  font-size: 12px;
`;

const PictureCredit = () => {
  return (
    <CreditWrapper>
      Background by <a href="https://unsplash.com/@jakebradley" rel="noopener noreferrer" target="_blank">Jake Bradley</a> on <a href="https://unsplash.com/" rel="noopener noreferrer" target="_blank">Unsplash</a>
    </CreditWrapper>
  );
};

export default PictureCredit;
