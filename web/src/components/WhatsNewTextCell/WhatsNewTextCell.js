export const QUERY = gql`
  query FindWhatsNewTextQuery($id: Int!) {
    whatsNewText: whatsNewText(id: $id) {
      id
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => <div>Empty</div>;

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
);

export const Success = ({ whatsNewText }) => {
  return <div>{JSON.stringify(whatsNewText)}</div>;
};
