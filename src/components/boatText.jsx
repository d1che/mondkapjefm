import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';

const Quote = styled.div`
  position: absolute;
  left: calc(47vw - 65px);
  top: 43px;
  font-weight: bold;
  font-size: 2rem;
  white-space: nowrap;
  overflow: hidden;
  max-width: calc(53vw + 65px);
  transform-origin: 0% 100%;
  transform: rotate(-4deg);
  color: black;
  z-index -1;
`; 

const BoatText = () => {

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          boatQuotes
        }
      }
    }
  `);

  const index = Math.floor((Math.random() * data.site.siteMetadata.boatQuotes.length))
  const quote = data.site.siteMetadata.boatQuotes ? data.site.siteMetadata.boatQuotes[index] : '';

  return (
    <Quote>{quote}</Quote>
  );
};

export default BoatText;
