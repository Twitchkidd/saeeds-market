import WithFromText from 'src/components/WithFromText/WithFromText';

export const QUERY = gql`
  query FindWithFromTextById($id: Int!) {
    withFromText: withFromText(id: $id) {
      id
      text
      createdAt
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => <div>WithFromText not found</div>;

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
);

export const Success = ({ withFromText }) => {
  return <WithFromText withFromText={withFromText} />;
};
