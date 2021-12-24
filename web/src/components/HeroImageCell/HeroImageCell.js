import styled from 'styled-components';

const HeroImage = styled.img`
  width: 100%;
`;

export const QUERY = gql`
  query FindHeroImagesQuery {
    heroImages {
      url
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => <div>Empty</div>;

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
);

export const Success = ({ heroImages }) => {
  return <HeroImage src={heroImages[0].url} alt="Delicious Greek food" />;
};
