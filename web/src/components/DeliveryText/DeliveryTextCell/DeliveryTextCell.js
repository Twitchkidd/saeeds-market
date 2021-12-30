import DeliveryText from 'src/components/DeliveryText/DeliveryText';

export const QUERY = gql`
  query FindDeliveryTextById($id: Int!) {
    deliveryText: deliveryText(id: $id) {
      id
      text
      createdAt
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => <div>DeliveryText not found</div>;

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
);

export const Success = ({ deliveryText }) => {
  return <DeliveryText deliveryText={deliveryText} />;
};
