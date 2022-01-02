import { Link, routes } from '@redwoodjs/router';

import WithFromTexts from 'src/components/WithFromText/WithFromTexts';

export const QUERY = gql`
  query FindWithFromTexts {
    withFromTexts {
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
      {'No withFromTexts yet. '}
      <Link to={routes.newWithFromText()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  );
};

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
);

export const Success = ({ withFromTexts }) => {
  return <WithFromTexts withFromTexts={withFromTexts} />;
};
