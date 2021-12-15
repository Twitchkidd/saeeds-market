import { Link, routes } from '@redwoodjs/router';

import WhatsNewHeaders from 'src/components/WhatsNewHeader/WhatsNewHeaders';

export const QUERY = gql`
  query FindWhatsNewHeaders {
    whatsNewHeaders {
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
      {'No whatsNewHeaders yet. '}
      <Link to={routes.newWhatsNewHeader()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  );
};

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
);

export const Success = ({ whatsNewHeaders }) => {
  return <WhatsNewHeaders whatsNewHeaders={whatsNewHeaders} />;
};
