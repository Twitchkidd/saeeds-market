export const QUERY = gql`
  query FindProductsSectionProductsQuery {
    productTypes {
      name
      important
      imageUrl
      products {
        name
      }
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => <div>Empty</div>;

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
);

export const Success = ({ productTypes }) => {
  return (
    <>
      {productTypes.map((product, i) => (
        <div key={i}>
          <h3>{product.name}</h3>
        </div>
      ))}
    </>
  );
};
