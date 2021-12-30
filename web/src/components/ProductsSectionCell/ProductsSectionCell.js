export const QUERY = gql`
  query FindProductsSectionQuery($id: Int!) {
    productsSection: productsSection(id: $id) {
      id
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => <div>Empty</div>;

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
);

export const Success = ({ productsSection }) => {
  return <div>{JSON.stringify(productsSection)}</div>;
};
