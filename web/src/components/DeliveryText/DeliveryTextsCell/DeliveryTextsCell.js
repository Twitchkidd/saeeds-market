import { Link, routes } from '@redwoodjs/router';

import DeliveryTexts from 'src/components/DeliveryText/DeliveryTexts';

export const QUERY = gql`
  query FindDeliveryTexts {
    deliveryTexts {
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
      {'No deliveryTexts yet. '}
      <Link to={routes.newDeliveryText()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  );
};

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
);

export const Success = ({ deliveryTexts }) => {
  return <DeliveryTexts deliveryTexts={deliveryTexts} />;
};
