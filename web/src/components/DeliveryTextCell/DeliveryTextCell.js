export const QUERY = gql`
  query FindDeliveryTextsQuery {
    deliveryTexts {
      text
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => <div>Empty</div>;

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
);

export const Success = ({ deliveryTexts }) => {
  return <div>{deliveryTexts[0].text}</div>;
};
