import NewItem from 'src/components/NewItem/NewItem';

export const QUERY = gql`
  query FindNewItemById($id: Int!) {
    newItem: newItem(id: $id) {
      id
      title
      description
      imageUrl
      createdAt
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => <div>NewItem not found</div>;

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
);

export const Success = ({ newItem }) => {
  return <NewItem newItem={newItem} />;
};
