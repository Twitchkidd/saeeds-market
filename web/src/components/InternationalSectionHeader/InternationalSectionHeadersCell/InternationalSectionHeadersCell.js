import { Link, routes } from '@redwoodjs/router';

import InternationalSectionHeaders from 'src/components/InternationalSectionHeader/InternationalSectionHeaders';

export const QUERY = gql`
  query FindInternationalSectionHeaders {
    internationalSectionHeaders {
      id
      text
      withFrom
      createdAt
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No internationalSectionHeaders yet. '}
      <Link to={routes.newInternationalSectionHeader()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  );
};

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
);

export const Success = ({ internationalSectionHeaders }) => {
  return (
    <InternationalSectionHeaders
      internationalSectionHeaders={internationalSectionHeaders}
    />
  );
};
