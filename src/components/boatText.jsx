import React, { useEffect } from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';

import variables from '../styles/variables';

const Quote = styled.div`
  position: absolute;
  left: calc(47vw - 65px);
  top: 43px;
  font-weight: bold;
  font-size: 2rem;
  white-space: nowrap;
  transform-origin: 0% 100%;
  transform: rotate(-4deg);
  color: black;
`; 

const PictureCredit = () => {

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          boatQuotes
        }
      }
    }
  `);

  const quote = data.site.siteMetadata.boatQuotes[Math.floor((Math.random() * data.site.siteMetadata.boatQuotes.length))];

  return (
    <Quote>{quote}</Quote>
  );
};

export default PictureCredit;
