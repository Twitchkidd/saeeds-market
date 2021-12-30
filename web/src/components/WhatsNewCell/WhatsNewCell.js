export const QUERY = gql`
  query FindWhatsNewQuery($id: Int!) {
    whatsNew: whatsNew(id: $id) {
      id
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => <div>Empty</div>;

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
);

export const Success = ({ whatsNew }) => {
  return <div>{JSON.stringify(whatsNew)}</div>;
};
