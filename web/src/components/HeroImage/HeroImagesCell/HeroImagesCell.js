import { Link, routes } from '@redwoodjs/router';

import HeroImages from 'src/components/HeroImage/HeroImages';

export const QUERY = gql`
  query FindHeroImages {
    heroImages {
      id
      title
      url
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No heroImages yet. '}
      <Link to={routes.newHeroImage()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  );
};

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
);

export const Success = ({ heroImages }) => {
  return <HeroImages heroImages={heroImages} />;
};
