import { Link, routes } from '@redwoodjs/router';

import InternationalSectionHeaderTexts from 'src/components/InternationalSectionHeaderText/InternationalSectionHeaderTexts';

export const QUERY = gql`
  query FindInternationalSectionHeaderTexts {
    internationalSectionHeaderTexts {
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
      {'No internationalSectionHeaderTexts yet. '}
      <Link to={routes.newInternationalSectionHeaderText()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  );
};

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
);

export const Success = ({ internationalSectionHeaderTexts }) => {
  return (
    <InternationalSectionHeaderTexts
      internationalSectionHeaderTexts={internationalSectionHeaderTexts}
    />
  );
};
