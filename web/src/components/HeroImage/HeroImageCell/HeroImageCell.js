import HeroImage from 'src/components/HeroImage/HeroImage';

export const QUERY = gql`
  query FindHeroImageById($id: Int!) {
    heroImage: heroImage(id: $id) {
      id
      title
      url
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => <div>HeroImage not found</div>;

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
);

export const Success = ({ heroImage }) => {
  return <HeroImage heroImage={heroImage} />;
};
