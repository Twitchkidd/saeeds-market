import styled from 'styled-components';

const Main = styled.main`
  display: grid;
  grid-auto-flow: row;
  place-items: center;
  min-height: 100vh;
  min-width: 380px;
  padding-left: 17px;
  padding-right: 17px;
  position: relative;
`;

const MainLayout = ({ children }) => {
  return <Main>{children}</Main>;
};

export default MainLayout;
