import DeliveryLink from 'src/components/DeliveryLink/DeliveryLink';

export const QUERY = gql`
  query FindDeliveryLinkById($id: Int!) {
    deliveryLink: deliveryLink(id: $id) {
      id
      name
      url
      createdAt
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => <div>DeliveryLink not found</div>;

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
);

export const Success = ({ deliveryLink }) => {
  return <DeliveryLink deliveryLink={deliveryLink} />;
};
