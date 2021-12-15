import { Link, routes } from '@redwoodjs/router';

import DeliveryLinks from 'src/components/DeliveryLink/DeliveryLinks';

export const QUERY = gql`
  query FindDeliveryLinks {
    deliveryLinks {
      id
      name
      url
      createdAt
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No deliveryLinks yet. '}
      <Link to={routes.newDeliveryLink()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  );
};

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
);

export const Success = ({ deliveryLinks }) => {
  return <DeliveryLinks deliveryLinks={deliveryLinks} />;
};
