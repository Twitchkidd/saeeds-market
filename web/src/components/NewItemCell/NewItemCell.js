export const QUERY = gql`
  query FindNewItemQuery($id: Int!) {
    newItem: newItem(id: $id) {
      id
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => <div>Empty</div>;

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
);

export const Success = ({ newItem }) => {
  return <div>{JSON.stringify(newItem)}</div>;
};
