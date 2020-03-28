import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const MetadataWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const Metadata = () => {
  const [currentSong, setCurrentSong] = useState('Geen informatie beschikbaar...');

  fetch('http://10.0.1.30:8000/stats?json=1')
  .then(res => console.log(res))

  return(
    <MetadataWrapper>
      Hoi
    </MetadataWrapper>
  );
};

export default Metadata;
