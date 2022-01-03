export const QUERY = gql`
  query FindInternationalSectionProductsQuery {
    countries {
      name
      abbr
      flagUrl
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

export const Success = ({ internationalSection }) => {
  return <div>{JSON.stringify(internationalSection)}</div>;
};
