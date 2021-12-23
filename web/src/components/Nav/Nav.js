import styled from 'styled-components';
import ResponsiveMenu from 'react-responsive-navbar';
import NavOpen from 'src/Icons/NavOpen';
import NavClose from 'src/Icons/NavClose';

const Wrapper = styled.nav`
  .small-menu-classname {
    width: 40px;
    margin-top: 18px;
    margin-bottom: 18px;
  }
`;

const ButtonWrapper = styled.div`
  display: grid;
  place-items: center;
  grid-auto-flow: column;
  gap: 7px;
`;

const NavText = styled.span`
  font-size: 20px;
  color: #3952a2;
`;

const Button = ({ which }) => (
  <ButtonWrapper>
    {which === 'open' ? <NavOpen /> : <NavClose />}
    <NavText>MENU</NavText>
  </ButtonWrapper>
);

const Nav = () => (
  <Wrapper>
    <ResponsiveMenu
      menuOpenButton={<Button which="open" />}
      menuCloseButton={<Button which="close" />}
      changeMenuOn="500px"
      largeMenuClassName="large-menu-classname"
      smallMenuClassName="small-menu-classname"
      menu={
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
          <li>Item 4</li>
        </ul>
      }
    />
  </Wrapper>
);

export default Nav;
