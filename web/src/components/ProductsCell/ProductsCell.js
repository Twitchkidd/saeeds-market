export const QUERY = gql`
  query ProductsQuery {
    products {
      id
      name
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => <div>Empty</div>;

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
);

export const Success = ({ products }) => {
  return (
    <ul>
      {products.map((item) => {
        return <li key={item.id}>{item.name}</li>;
      })}
    </ul>
  );
};
