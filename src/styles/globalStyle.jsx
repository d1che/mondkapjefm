import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  // Main font
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,700;1,400&display=swap');

  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    // This defines what 1rem is
    font-size: 62.5%;
  }

  body {
    box-sizing: border-box;
    font-family: ${props => props.theme.primaryFont};
    color: ${props => props.theme.colorText};
  }

  h1 {
    color: ${props => props.theme.colorTitle};
    font-size 3rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  p {
    font-size: ${props => props.theme.fontSizeDefault};
  }

  a {
    color: ${props => props.theme.colorPrimaryLight};;
    text-decoration: none;
  }
`;

export default GlobalStyle;
