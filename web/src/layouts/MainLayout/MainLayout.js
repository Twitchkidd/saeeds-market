import styled from 'styled-components';
import { verticalSpace1 } from 'src/utils/spacing';

const Wrapper = styled.div`
  display: grid;
  grid-auto-flow: row;
  place-items: center;

  position: relative;

  min-height: 100vh;
  width: 100vw;
  padding: 44px 0 34px 0;
  padding-left: 4.1vw; /* 17 / 414 = 0.04106280193236715 */
  padding-right: 4.1vw;

  & > * {
    margin-bottom: ${verticalSpace1};
  }
`;

const MainLayout = ({ children }) => (
  <Wrapper id="main-layout">{children}</Wrapper>
);

export default MainLayout;
