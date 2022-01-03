import { useState } from 'react';
import styled from 'styled-components';
import Logo from 'src/assets/logo.svg';
import UserAuthTools from 'src/components/UserAuthTools/UserAuthTools';
import TagLineTextCell from 'src/components/TagLineTextCell/TagLineTextCell';
import Button from 'src/components/Button/Button';
import PrimaryCallToActionTextCell from 'src/components/PrimaryCallToActionTextCell/PrimaryCallToActionTextCell';
import DisplayText from 'src/components/DisplayText/DisplayText';
import DeliveryTextCell from 'src/components/DeliveryTextCell/DeliveryTextCell';
import DeliveryButtons from 'src/components/DeliveryButtons/DeliveryButtons';
import HeroImageCell from 'src/components/HeroImageCell/HeroImageCell';
import SectionHeader from 'src/components/SectionHeader/SectionHeader';
import WhatsNewTextCell from 'src/components/WhatsNewTextCell/WhatsNewTextCell';
import WhatsNewCell from 'src/components/WhatsNewCell/WhatsNewCell';
import InternationalSectionHeaderTextCell from 'src/components/InternationalSectionHeaderTextCell/InternationalSectionHeaderTextCell';
import InternationalSectionCell from 'src/components/InternationalSectionCell/InternationalSectionCell';
import ProductsSectionHeaderTextCell from 'src/components/ProductsSectionHeaderTextCell/ProductsSectionHeaderTextCell';
import ProductsSectionHeaderImageCell from 'src/components/ProductsSectionHeaderImageCell/ProductsSectionHeaderImageCell';
import ProductsSectionCell from 'src/components/ProductsSectionCell/ProductsSectionCell';
import { verticalKeyline2, verticalSpace1 } from 'src/utils/spacing';

const MainWrapper = styled.main`
  display: grid;
  place-items: center;
  grid-auto-flow: row;

  & > * {
    margin-bottom: ${verticalSpace1};
  }
`;

const SectionWrapper = styled.section`
  font-family: 'Birthstone Bounce', cursive;
  /* font-family: 'Sacramento', cursive; */

  ${(props) => (props.left ? `text-align: left;` : null)}
`;

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
      <TagLineTextCell />
      <Button big>
        <PrimaryCallToActionTextCell />
      </Button>
      <DisplayText>
        <DeliveryTextCell />
      </DisplayText>
      <DeliveryButtons />
      <HeroImageCell />
      <SectionWrapper>
        <SectionHeader left>
          <WhatsNewTextCell />
        </SectionHeader>
        <WhatsNewCell />
      </SectionWrapper>
      <SectionWrapper>
        <SectionHeader>
          <InternationalSectionHeaderTextCell />
        </SectionHeader>
        <InternationalSectionCell />
      </SectionWrapper>
      <SectionWrapper>
        <SectionHeader>
          <ProductsSectionHeaderTextCell />
          <ProductsSectionHeaderImageCell />
        </SectionHeader>
        <ProductsSectionCell />
      </SectionWrapper>
    </MainWrapper>
  );
};

export default Main;
