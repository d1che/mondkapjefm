import styled from 'styled-components';

const PageTitle = styled.h1`
  font-size: 5rem;
  font-family: ${props => props.theme.secondaryFont};
`;

const SectionTitle = styled.h2`
  font-size: 3rem;
`;

export { 
  PageTitle, 
  SectionTitle 
};
