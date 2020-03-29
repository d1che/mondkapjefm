import styled from 'styled-components';

const FixedBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-image: url(../img/background.jpg);
  background-position: 47% 0;
  background-attachment: fixed;
  z-index: -1;
  // Makes it so that the background image doesn't scroll with the page.
`;

export default FixedBackground;
