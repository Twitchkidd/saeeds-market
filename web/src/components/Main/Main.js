import { useState } from 'react';
import styled from 'styled-components';
import Logo from 'src/assets/logo.svg';
import UserAuthTools from 'src/components/UserAuthTools/UserAuthTools';
import TagLineCell from 'src/components/TagLineCell/TagLineCell';
import Button from 'src/components/Button/Button';
import PrimaryCallToActionTextCell from 'src/components/PrimaryCallToActionTextCell/PrimaryCallToActionTextCell';
import DisplayText from 'src/components/DisplayText/DisplayText';
import DeliveryTextCell from 'src/components/DeliveryTextCell/DeliveryTextCell';
import DeliveryButtons from 'src/components/DeliveryButtons/DeliveryButtons';
import HeroImageCell from 'src/components/HeroImageCell/HeroImageCell';
import SectionHeader from 'src/components/SectionHeader/SectionHeader';
import WhatsNewTextCell from 'src/components/WhatsNewTextCell/WhatsNewTextCell';
import WhatsNewCell from 'src/components/WhatsNewTextCell/WhatsNewCell';
import InternationalSectionHeaderCell from 'src/components/InternationalSectionHeaderCell/InternationalSectionHeaderCell';
import InternationalSectionCell from 'src/components/InternationalSectionCell/InternationalSectionCell';
import ProductsSectionHeaderCell from 'src/components/ProductsSectionHeaderCell/ProductsSectionHeaderCell';
import ProductsSectionCell from 'src/components/ProductsSectionCell/ProductsSectionCell';
import { verticalKeyline2 } from 'src/utils/spacing';

const MainWrapper = styled.main``;

const SectionWrapper = styled.section``;

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
      <DisplayText>
        <DeliveryTextCell />
      </DisplayText>
      <DeliveryButtons />
      <HeroImageCell />
      <SectionWrapper>
        <SectionHeader>
          <WhatsNewTextCell />
        </SectionHeader>
        <WhatsNewCell />
      </SectionWrapper>
      <SectionWrapper>
        <InternationalSectionHeaderCell />
        <InternationalSectionCell />
      </SectionWrapper>
      <SectionWrapper>
        <ProductsSectionHeaderCell />
        <ProductsSectionCell />
      </SectionWrapper>
    </MainWrapper>
  );
};

export default Main;
