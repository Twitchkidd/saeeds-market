import { useState } from 'react';
import styled from 'styled-components';
import Logo from 'src/assets/logo.svg';
import UserAuthTools from 'src/components/UserAuthTools/UserAuthTools';
import TagLineCell from 'src/components/TagLineCell/TagLineCell';
import DisplayText from 'src/components/DisplayText/DisplayText';
import DeliveryButtons from 'src/components/DeliveryButtons/DeliveryButtons';
import Button from 'src/components/Button/Button';
import PrimaryCallToActionTextCell from 'src/components/PrimaryCallToActionTextCell/PrimaryCallToActionTextCell';
import HeroImageCell from 'src/components/HeroImageCell/HeroImageCell';
import { verticalKeyline2 } from 'src/utils/spacing';

const MainWrapper = styled.main``;

const Main = () => {
  const [taps, setTaps] = useState(0);
  const handleClick = () => {
    setTaps((prevTaps) => ++prevTaps);
  };
  return (
    <MainWrapper>
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
    </MainWrapper>
  );
};

export default Main;
