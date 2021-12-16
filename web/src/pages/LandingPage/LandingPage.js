import { Link, routes } from '@redwoodjs/router';
import styled from 'styled-components';
import { MetaTags } from '@redwoodjs/web';
import Header from 'src/components/Header';
import MenuLinks from 'src/components/MenuLinks';
import Footer from 'src/components/Footer';
import {
  alloyOrange,
  vividMalachine,
  internationalOrange,
  mediumBlue,
} from 'src/utils/colors';
import Phone from 'src/Icons/Phone';
import Map from 'src/Icons/Map';

const ButtonsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 32px;
  a {
    display: block;
    border-radius: 16px;
    width: calc(50vw - 64px);
    text-align: center;
    text-decoration: none;
    font-size: 24px;
    color: #fefefe;
    padding: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const LandingPage = () => {
  return (
    <>
      <MetaTags
        title="Landing"
        // description="Landing description"
        /* you should un-comment description and add a unique description, 155 characters or less
      You can look at this documentation for best practices : https://developers.google.com/search/docs/advanced/appearance/good-titles-snippets */
      />
      <Header />
      <MenuLinks />
      <ButtonsWrapper>
        <a href="#" style={{ background: vividMalachine }}>
          <Phone style={{ marginRight: '8px' }} />
          Call
        </a>
        <a href="#" style={{ background: mediumBlue }}>
          <Map style={{ marginRight: '8px' }} />
          Map
        </a>
        <a href="#" style={{ background: alloyOrange }}>
          GrubHub
        </a>
        <a href="#" style={{ background: internationalOrange }}>
          DoorDash
        </a>
      </ButtonsWrapper>
      <Footer />
    </>
  );
};

export default LandingPage;
