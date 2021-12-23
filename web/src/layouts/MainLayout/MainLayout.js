import styled from 'styled-components';

const Main = styled.main`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 17px;
  padding-right: 17px;
  position: relative;
`;

const MainLayout = ({ children }) => {
  return <Main>{children}</Main>;
};

export default MainLayout;
