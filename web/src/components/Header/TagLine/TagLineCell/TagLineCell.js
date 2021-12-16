import TagLine from 'src/components/Header/TagLine/TagLine';

export const QUERY = gql`
  query FindTagLineById($id: Int!) {
    tagLine: tagLine(id: $id) {
      id
      text
      createdAt
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => <div>TagLine not found</div>;

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
);

export const Success = ({ tagLine }) => {
  return <TagLine tagLine={tagLine} />;
};
