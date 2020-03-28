import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const MetadataWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const Metadata = () => {
  const [currentSong, setCurrentSong] = useState('Geen informatie beschikbaar...');

  return(
    <MetadataWrapper>
      Hoi
    </MetadataWrapper>
  );
};

export default Metadata;
