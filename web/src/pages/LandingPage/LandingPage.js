// import { Link, routes } from '@redwoodjs/router';
import { useState } from 'react';
import styled from 'styled-components';
import { MetaTags } from '@redwoodjs/web';
import HorizontalBreak from 'src/components/HorizontalBreak';
import Nav from 'src/components/Nav';
import Logo from 'src/assets/logo.svg';
import UberEats from 'src/assets/uberEats.svg';
import DoorDash from 'src/Icons/DoorDash';
import grubHub from '../../../assets/grubHub.png';
import TagLineCell from 'src/components/TagLineCell/TagLineCell';
import UserAuthTools from 'src/components/UserAuthTools/UserAuthTools';
import Button from 'src/components/Button/Button';
import HeroImageCell from 'src/components/HeroImageCell/HeroImageCell';
import { spacing1, spacing4 } from 'src/utils/spacing';

const DisplayText = styled.p`
  font-size: 1rem;
  margin: 0;
  margin-bottom: ${spacing4};
`;

const ButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  /* gap: ${spacing4}; */
  /* padding: ${spacing4}; */
  margin-bottom: ${spacing1};
`;

const TestBox = styled.div`
  width: 60px;
  height: 20px;
  background: blue;
`;

const LandingPage = () => {
  const [taps, setTaps] = useState(0);
  const handleClick = () => {
    console.log(taps);
    setTaps((prevTaps) => ++prevTaps);
  };
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
      {taps < 8 ? (
        <Logo
          onClick={handleClick}
          style={{ width: '309px', height: '309px', marginBottom: '28px' }}
        />
      ) : (
        <UserAuthTools />
      )}
      <TagLineCell />
      <Button big>Call In — (860) 440-2238</Button>
      <DisplayText>Or get delivery:</DisplayText>
      <ButtonsWrapper>
        <UberEats style={{ width: '90px', height: 'auto' }} />
        <img
          src={grubHub}
          alt="Order from GrubHub"
          width="90px"
          height="auto"
        />
        <DoorDash />
      </ButtonsWrapper>
      <HeroImageCell />
    </>
  );
};

export default LandingPage;
