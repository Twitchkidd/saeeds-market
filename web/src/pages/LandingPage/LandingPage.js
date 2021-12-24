// import { Link, routes } from '@redwoodjs/router';
import { useState } from 'react';
// import styled from 'styled-components';
import { MetaTags } from '@redwoodjs/web';
import HorizontalBreak from 'src/components/HorizontalBreak';
import Nav from 'src/components/Nav';
import Logo from 'src/assets/logo.svg';
import TagLineCell from 'src/components/TagLineCell/TagLineCell';
import UserAuthTools from 'src/components/UserAuthTools/UserAuthTools';

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
    </>
  );
};

export default LandingPage;
