// import { Link, routes } from '@redwoodjs/router';
// import styled from 'styled-components';
import { MetaTags } from '@redwoodjs/web';
// import Header from 'src/components/Header';
// import MenuLinks from 'src/components/MenuLinks';
import HorizontalBreak from 'src/components/HorizontalBreak';
// import Footer from 'src/components/Footer';
// import {
//   tigersEye,
//   crayolaGreen,
//   internationalOrange,
//   greekBlue,
// } from 'src/utils/colors';
// import Phone from 'src/Icons/Phone';
// import Map from 'src/Icons/Map';
import Nav from 'src/components/Nav';
import Logo from 'src/assets/logo.svg';

// const ButtonsWrapper = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   gap: 8px;
//   margin-top: 32px;
//   a {
//     display: block;
//     border-radius: 16px;
//     width: calc(50vw - 64px);
//     text-align: center;
//     text-decoration: none;
//     font-size: 24px;
//     color: #fefefe;
//     padding: 8px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//   }
// `;

const LandingPage = () => {
  return (
    <>
      <MetaTags
        title="Landing"
        // description="Landing description"
        /* you should un-comment description and add a unique description, 155 characters or less
      You can look at this documentation for best practices : https://developers.google.com/search/docs/advanced/appearance/good-titles-snippets */
      />
      <Nav />
      <HorizontalBreak />
      <Logo style={{ maxWidth: '100%', maxHeight: '100%' }} />
      {/* <Header />
      <MenuLinks />
      <ButtonsWrapper>
        <a href="#" style={{ background: crayolaGreen }}>
          <Phone style={{ marginRight: '8px' }} />
          Call
        </a>
        <a href="#" style={{ background: greekBlue }}>
          <Map style={{ marginRight: '8px' }} />
          Map
        </a>
        <a href="#" style={{ background: tigersEye }}>
          GrubHub
        </a>
        <a href="#" style={{ background: internationalOrange }}>
          DoorDash
        </a>
      </ButtonsWrapper>
      <HorizontalBreak />
      <Footer /> */}
    </>
  );
};

export default LandingPage;
