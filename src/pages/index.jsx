import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/layout';

const TitleContainer = styled.div`
  position: absolute;
  bottom: 30%;
  width: 70%;
  font-family: ${props => props.theme.secondaryFont};
  font-weight: 700;
  text-shadow: 2px 2px 1px ${props => props.theme.colorBackgroundDark};
  text-border:
`;

const Title = styled.h1`
  color: ${props => props.theme.colorPrimaryLight};
  font-size: 5.5rem;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
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
        <Title>{data.site.siteMetadata.title}</Title>
        <Nutshell>{data.site.siteMetadata.nutshell}</Nutshell>
      </TitleContainer>
    </Layout>
  );
};

export default Home;
