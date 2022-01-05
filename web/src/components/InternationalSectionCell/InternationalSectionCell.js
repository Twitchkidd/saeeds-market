export const QUERY = gql`
  query FindInternationalSectionProductsQuery {
    countries {
      name
      abbr
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

export const Success = ({ countries }) => {
  return <div>{JSON.stringify(countries)}</div>;
};
