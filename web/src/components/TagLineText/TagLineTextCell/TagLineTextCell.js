import TagLineText from 'src/components/TagLineText/TagLineText';

export const QUERY = gql`
  query FindTagLineTextById($id: Int!) {
    tagLineText: tagLineText(id: $id) {
      id
      text
      createdAt
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => <div>TagLineText not found</div>;

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
);

export const Success = ({ tagLineText }) => {
  return <TagLineText tagLineText={tagLineText} />;
};
