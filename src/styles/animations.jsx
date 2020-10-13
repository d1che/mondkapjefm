import { createGlobalStyle } from 'styled-components';

const Animations = createGlobalStyle`  
  @keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }

  @keyframes zoomOut {
    0% { 
      opacity: 0;
      transform: scale(2);
    }
    100% { 
      opacity: 1;
      transform: scale(1);
    }
  }
`;

export default Animations;
