import WeCarryText from 'src/components/WeCarryText/WeCarryText';

export const QUERY = gql`
  query FindWeCarryTextById($id: Int!) {
    weCarryText: weCarryText(id: $id) {
      id
      text
      createdAt
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => <div>WeCarryText not found</div>;

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
);

export const Success = ({ weCarryText }) => {
  return <WeCarryText weCarryText={weCarryText} />;
};
