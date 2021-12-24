import { Link, routes } from '@redwoodjs/router';

import PrimaryCallToActionTexts from 'src/components/PrimaryCallToActionText/PrimaryCallToActionTexts';

export const QUERY = gql`
  query FindPrimaryCallToActionTexts {
    primaryCallToActionTexts {
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
      {'No primaryCallToActionTexts yet. '}
      <Link to={routes.newPrimaryCallToActionText()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  );
};

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
);

export const Success = ({ primaryCallToActionTexts }) => {
  return (
    <PrimaryCallToActionTexts
      primaryCallToActionTexts={primaryCallToActionTexts}
    />
  );
};
