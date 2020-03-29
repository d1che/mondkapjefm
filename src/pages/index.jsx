import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';

import variables from '../styles/variables';

import Layout from '../components/layout';
import BoatText from '../components/boatText';

const TitleContainer = styled.div`
  position: absolute;
  bottom: 30%;
  width: 70%;
  font-family: ${props => props.theme.secondaryFont};
  font-weight: 700;
  text-shadow: 1px 1px 1px ${props => props.theme.colorBackgroundDark};

  @media only screen and (max-width: calc(${variables.screenWidth} + 250px)) {
    bottom: 25%;
  }
`;

const Logo = styled.img`
  display: block;
  position: relative;
`;

const Title = styled.h1`
  color: ${props => props.theme.colorBackgroundDark};
  font-size: 5.5rem;
  letter-spacing: 0.1rem;
  //text-transform: uppercase;
  text-shadow: 4px 4px 1px ${props => props.theme.colorPrimaryLight};

  @media only screen and (max-width: calc(${variables.screenWidth} + 250px)) {
    font-size: 4rem;
    margin-bottom: 0;
  }
`;

const Nutshell = styled.h2`
  font-size: 3rem;
  letter-spacing: 0.3rem;
  word-wrap: normal;
`;

const Home = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          nutshell
        }
      }
    }
  `);

  return (
    <Layout>
      <TitleContainer>
        <Logo src="../logo.svg"/>
        <Title>{data.site.siteMetadata.title}</Title>
        <Nutshell>{data.site.siteMetadata.nutshell}</Nutshell>
      </TitleContainer>
    </Layout>
  );
};

export default Home;
