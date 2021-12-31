import styled from 'styled-components';
import Nav from 'src/components/Nav';
import HorizontalBreak from 'src/components/HorizontalBreak';

const HeaderWrapper = styled.header`
  display: grid;
  place-items: center;

  width: 100%;
`;

const Header = () => (
  <HeaderWrapper>
    <Nav />
    <HorizontalBreak />
  </HeaderWrapper>
);

export default Header;
