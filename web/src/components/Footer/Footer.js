import styled from 'styled-components';
import MadeWithLove from './MadeWithLove/MadeWithLove';
import BusinessInfoCell from './BusinessInfoCell/BusinessInfoCell';
import { mediumBlue, rainbowPurple } from 'src/utils/colors';

const Wrapper = styled.div`
  background: ${mediumBlue};
  text-align: center;
  padding: 18px 42px;
  color: #fefefe;
  display: grid;
  place-items: center;
  a {
    text-decoration: none;
    color: #fefefe;
  }
  /* a:visited {
    color: ${rainbowPurple};
  } */
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
