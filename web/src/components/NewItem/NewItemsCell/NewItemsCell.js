import { Link, routes } from '@redwoodjs/router';

import NewItems from 'src/components/NewItem/NewItems';

export const QUERY = gql`
  query FindNewItems {
    newItems {
      id
      title
      description
      createdAt
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No newItems yet. '}
      <Link to={routes.newNewItem()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  );
};

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
);

export const Success = ({ newItems }) => {
  return <NewItems newItems={newItems} />;
};
