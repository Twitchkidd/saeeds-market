import { Link, routes } from '@redwoodjs/router';

import Titles from 'src/components/Title/Titles';

export const QUERY = gql`
  query FindTitles {
    titles {
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
      {'No titles yet. '}
      <Link to={routes.newTitle()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  );
};

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
);

export const Success = ({ titles }) => {
  return <Titles titles={titles} />;
};
