import styled from 'styled-components';
import { verticalSpace1 } from 'src/utils/spacing';

const Wrapper = styled.div`
  display: grid;
  grid-auto-flow: row;
  place-items: center;
  min-height: 100vh;
  min-width: 380px;
  padding-left: 17px;
  padding-right: 17px;
  position: relative;
  & > * {
    margin-bottom: ${verticalSpace1};
  }
`;

const MainLayout = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default MainLayout;
