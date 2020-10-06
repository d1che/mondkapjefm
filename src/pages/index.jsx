import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';

import variables from '../styles/variables';

import Layout from '../components/layout';
import BoatLine from '../components/boatLine';
import BoatText from '../components/boatText';

const TitleContainer = styled.div`
  position: absolute;
  left: 16.5rem;
  bottom: 14.5rem;
  padding: 3.5rem;
  font-family: ${props => props.theme.secondaryFont};
  font-weight: 700;
  text-shadow: 2px 2px 1px ${props => props.theme.colorBackgroundDark};
  background: radial-gradient(
    ${props => props.theme.colorBackgroundLight}33 40%, 
    ${props => props.theme.colorBackgroundDark}00 70%);

  @media only screen and (max-width: calc(${variables.screenWidth} + 400px)) {
    top: 22rem;
    left: 0rem;
    //bottom: unset;
  }

  @media only screen and (max-width: calc(${variables.screenWidth})) {
    left: -2rem;
  }
`;

const Title = styled.h1`
  color: ${props => props.theme.colorBackgroundDark};
  font-size: 5.5rem;
  letter-spacing: 0.1rem;
  text-shadow: 3px 3px 1px ${props => props.theme.colorPrimaryLight};

  @media only screen and (max-width: calc(${variables.screenWidth} + 400px)) {
    font-size: calc(3rem + 2vw);
  }
`;

const Nutshell = styled.h2`
  font-size: 3rem;
  font-style: italic;
  letter-spacing: 0.3rem;
  word-wrap: normal;

  @media only screen and (max-width: calc(${variables.screenWidth} + 400px)) {
    font-size: calc(1.3rem + 1.3vw);
  }
`;

const Home = ({ children }) => {
  const [index, setIndex] = useState(null);

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          nutshell
          boatQuotes
        }
      }
    }
  `);

  useEffect(() => {
    setIndex(Math.floor(Math.random() * data.site.siteMetadata.boatQuotes.length));
  }, [data.site.siteMetadata.boatQuotes.length]);

  const quote = index != null && data.site.siteMetadata.boatQuotes ? data.site.siteMetadata.boatQuotes[index] : '';

  return (
    <Layout>
      {index != null && <BoatLine/>}
      {index != null && <BoatText quote={quote}/>}
      <TitleContainer>
        <Title>{data.site.siteMetadata.title}</Title>
        <Nutshell>{data.site.siteMetadata.nutshell}</Nutshell>
      </TitleContainer>
    </Layout>
  );
};

export default Home;
