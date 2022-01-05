import styled from 'styled-components';
import ResponsiveMenu from 'react-responsive-navbar';
import OpenNavIcon from 'src/assets/svg/openNavIcon.svg';
import CloseNavIcon from 'src/assets/svg/closeNavIcon.svg';

const Wrapper = styled.nav`
  margin: 0;
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
    {which === 'open' ? (
      <OpenNavIcon style={{ width: '14px', height: '14px' }} />
    ) : (
      <CloseNavIcon style={{ width: '14px', height: '14px' }} />
    )}
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
