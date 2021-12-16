import { Link, routes } from '@redwoodjs/router';

import BusinessInfos from 'src/components/Footer/BusinessInfo/BusinessInfos';

export const QUERY = gql`
  query FindBusinessInfos {
    businessInfos {
      id
      name
      address
      hours
      phone
      createdAt
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No businessInfos yet. '}
      <Link to={routes.newBusinessInfo()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  );
};

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
);

export const Success = ({ businessInfos }) => {
  return <BusinessInfos businessInfos={businessInfos} />;
};
