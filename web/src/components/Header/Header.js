import styled from 'styled-components';
import Nav from 'src/components/Nav';
import HorizontalBreak from 'src/components/HorizontalBreak';

const HeaderWrapper = styled.header``;

const Header = () => (
  <HeaderWrapper>
    <Nav />
    <HorizontalBreak />
  </HeaderWrapper>
);

export default Header;
