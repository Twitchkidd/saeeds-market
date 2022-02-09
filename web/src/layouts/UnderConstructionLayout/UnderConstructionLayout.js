import { saeedsBlue } from 'src/utils/colors';
import styled from 'styled-components';

const Wrapper = styled.div`
  /* display: grid;
  grid-auto-flow: row;
  place-items: center; */
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  align-items: center;
  justify-content: center;
  gap: 24px;
  background: ${saeedsBlue};
  /* padding: 44px 0 34px 0; */
`;

const UnderConstructionLayout = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default UnderConstructionLayout;
