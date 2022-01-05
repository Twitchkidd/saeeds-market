import styled from 'styled-components';
import BusinessInfoCell from 'src/components/BusinessInfoCell/BusinessInfoCell';
import MadeWithLove from 'src/components/MadeWithLove/MadeWithLove';
import { verticalSpace1 } from 'src/utils/spacing';
import { blue400, saeedsWhite } from 'src/utils/colors';

const FooterWrapper = styled.footer`
  display: grid;
  place-items: center;
  grid-auto-flow: row;

  /* position: fixed; */
  left: -4.1vw;

  width: calc(100% + 8.2vw);
  padding-top: ${verticalSpace1};
  padding-bottom: ${verticalSpace1};
  background: ${blue400};

  color: ${saeedsWhite};

  & > * {
    margin-bottom: ${verticalSpace1};
  }

  & p {
    margin-top: ${verticalSpace1};
    /* color: red; */
  }

  & > strong:nth-child(1) {
    margin-top: ${verticalSpace1};

    font-size: 18px;
  }
`;

const Footer = () => (
  <FooterWrapper>
    <BusinessInfoCell />
    <MadeWithLove />
  </FooterWrapper>
);

export default Footer;
