import { Link, routes } from '@redwoodjs/router';

import InternationalSectionHeadings from 'src/components/InternationalSectionHeading/InternationalSectionHeadings';

export const QUERY = gql`
  query FindInternationalSectionHeadings {
    internationalSectionHeadings {
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
      {'No internationalSectionHeadings yet. '}
      <Link to={routes.newInternationalSectionHeading()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  );
};

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
);

export const Success = ({ internationalSectionHeadings }) => {
  return (
    <InternationalSectionHeadings
      internationalSectionHeadings={internationalSectionHeadings}
    />
  );
};
