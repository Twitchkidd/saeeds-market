import { Link, routes } from '@redwoodjs/router';

import WeCarryTexts from 'src/components/WeCarryText/WeCarryTexts';

export const QUERY = gql`
  query FindWeCarryTexts {
    weCarryTexts {
      id
      text
      createdAt
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No weCarryTexts yet. '}
      <Link to={routes.newWeCarryText()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  );
};

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
);

export const Success = ({ weCarryTexts }) => {
  return <WeCarryTexts weCarryTexts={weCarryTexts} />;
};
