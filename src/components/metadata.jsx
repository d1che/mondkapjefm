import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';

const MetadataWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const Metadata = () => {
  const [currentSong, setCurrentSong] = useState('Geen informatie beschikbaar...');

  useEffect(() => {
    fetch('http://80.115.174.87:8000/currentsong?sid=1', { mode: 'no-cors'})
    .then(res => setCurrentSong(res));
  });

  return(
    <MetadataWrapper>
      {currentSong}
    </MetadataWrapper>
  );
};

export default Metadata;
