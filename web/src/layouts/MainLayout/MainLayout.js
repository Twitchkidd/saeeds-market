import styled from 'styled-components';

const Main = styled.main`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainLayout = ({ children }) => {
  return <Main>{children}</Main>;
};

export default MainLayout;
