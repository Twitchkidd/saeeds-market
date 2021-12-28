import { useState } from 'react';
import { MetaTags } from '@redwoodjs/web';
import Nav from 'src/components/Nav';
import HorizontalBreak from 'src/components/HorizontalBreak';
import Logo from 'src/assets/logo.svg';
import UserAuthTools from 'src/components/UserAuthTools/UserAuthTools';
import TagLineCell from 'src/components/TagLineCell/TagLineCell';
import DisplayText from 'src/components/DisplayText/DisplayText';
import DeliveryButtons from 'src/components/DeliveryButtons/DeliveryButtons';
import Button from 'src/components/Button/Button';
import PrimaryCallToActionTextCell from 'src/components/PrimaryCallToActionTextCell/PrimaryCallToActionTextCell';
import HeroImageCell from 'src/components/HeroImageCell/HeroImageCell';
import { verticalKeyline2 } from 'src/utils/spacing';

const LandingPage = () => {
  const [taps, setTaps] = useState(0);
  const handleClick = () => {
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
          style={{
            width: verticalKeyline2,
            height: verticalKeyline2,
          }}
        />
      ) : (
        <UserAuthTools />
      )}
      <TagLineCell />
      <Button big>
        <PrimaryCallToActionTextCell />
      </Button>
      <DisplayText>Or get delivery:</DisplayText>
      <DeliveryButtons />
      <HeroImageCell />
    </>
  );
};

export default LandingPage;
