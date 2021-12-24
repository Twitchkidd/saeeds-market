import { spacing1 } from 'src/utils/spacing';
import styled from 'styled-components';

const HeroImage = styled.img`
  width: 100%;
  padding-bottom: 28px;
`;

const HeroLoader = styled.div`
  width: 100%;
  padding-bottom: 28px;
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
  return <HeroImage src={heroImages[0].url} alt="Delicious Greek food" />;
};
