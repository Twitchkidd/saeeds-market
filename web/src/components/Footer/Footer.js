import styled from 'styled-components';
import BusinessInfoCell from 'src/components/BusinessInfoCell/BusinessInfoCell';
import MadeWithLove from 'src/components/MadeWithLove/MadeWithLove';

const FooterWrapper = styled.footer``;

const Footer = () => (
  <FooterWrapper>
    <BusinessInfoCell />
    <MadeWithLove />
  </FooterWrapper>
);

export default Footer;
