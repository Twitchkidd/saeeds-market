import styled from 'styled-components';
import { MetaTags } from '@redwoodjs/web';
import boat from 'src/assets/images/boat.png';
import words from 'src/assets/images/words.png';

const LogoWrapper = styled.div`
  width: 100vw;
  height: 100vw;
  position: relative;
  margin-top: -40px;
`;

const LogoPart = styled.img`
  width: 414px;
  height: 414px;
  /* margin-left: -1px; */
  position: absolute;
  top: 0;
  left: 0;
`;

const UnderConstructionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-bottom: 20px;
`;

const UnderConstructionPart = styled.p`
  color: #fefefe;
  font-size: 42px;
  font-weight: 700;
  font-style: italic;
  margin-left: -4px;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 8px;
`;

const Info = styled.p`
  color: #fefefe;
  font-size: 24px;
  font-weight: bold;
  margin-left: 20px;
`;

const UnderConstructionPage = () => {
  return (
    <>
      <MetaTags
        title="UnderConstruction"
        // description="UnderConstruction description"
        /* you should un-comment description and add a unique description, 155 characters or less
      You can look at this documentation for best practices : https://developers.google.com/search/docs/advanced/appearance/good-titles-snippets */
      />
      <LogoWrapper>
        <LogoPart src={words} />
        <LogoPart src={boat} />
      </LogoWrapper>
      <UnderConstructionWrapper>
        <UnderConstructionPart>Under</UnderConstructionPart>
        <UnderConstructionPart>Construction!</UnderConstructionPart>
      </UnderConstructionWrapper>
      <InfoWrapper>
        <Info style={{ fontSize: '28px' }}>Saeed's International Market</Info>
        <Info>464 Ocean Ave, New London</Info>
        <Info>Open Monday to Saturday 11-5</Info>
        <Info>860.440.3822</Info>
        <Info>See you soon!</Info>
      </InfoWrapper>
    </>
  );
};

export default UnderConstructionPage;
