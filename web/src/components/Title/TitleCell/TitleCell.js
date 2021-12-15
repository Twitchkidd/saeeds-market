import Title from 'src/components/Title/Title';

export const QUERY = gql`
  query FindTitleById($id: Int!) {
    title: title(id: $id) {
      id
      text
      createdAt
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => <div>Title not found</div>;

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
);

export const Success = ({ title }) => {
  return <Title title={title} />;
};
