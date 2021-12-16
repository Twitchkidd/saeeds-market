import styled from 'styled-components';
import MadeWithLove from './MadeWithLove/MadeWithLove';
import BusinessInfoCell from './BusinessInfoCell/BusinessInfoCell';
import { greekBlue, rainbowPurple } from 'src/utils/colors';

const Wrapper = styled.div`
  background: ${greekBlue};
  text-align: center;
  padding: 24px;
  color: #fefefe;
  display: grid;
  margin-top: 64px;
  place-items: center;
  a {
    text-decoration: none;
  }
  a {
    color: #fefefe;
  }
  a:visited {
    color: ${rainbowPurple};
  }
  left: 0;
  margin-left: -50vw;
  margin-right: -50vw;
  max-width: 100vw;
  position: relative;
  right: 42px;
  width: 100vw;
`;

const Footer = () => {
  return (
    <Wrapper>
      <BusinessInfoCell />
      <MadeWithLove />
    </Wrapper>
  );
};

export default Footer;
