import styled from 'styled-components';
// import localHero from '../../../../../assets-saeeds/photos/Hero.jpg';

const thumbnail = (url) => {
  const parts = url.split('/');
  parts.splice(3, 0, 'resize=width:640');
  return parts.join('/');
};

const HeroImage = styled.img`
  width: 100%;
`;

const HeroLoader = styled.div`
  width: 100%;
`;

export const QUERY = gql`
  query FindHeroImagesQuery {
    heroImages {
      url
    }
  }
`;

export const Loading = () => <HeroLoader />;

export const Empty = () => <div>Empty</div>;

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
);

export const Success = ({ heroImages }) => {
  // return (
  //   <HeroImage src={thumbnail(heroImages[0].url)} alt="Delicious Greek food" />
  // ); // Todo: desc
  return <HeroImage src={localHero} alt="Delicious Greek food" />;
};
