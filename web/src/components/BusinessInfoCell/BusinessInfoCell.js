export const QUERY = gql`
  query FindBusinessInfoQuery($id: Int!) {
    businessInfo: businessInfo(id: $id) {
      id
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => <div>Empty</div>;

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
);

export const Success = ({ businessInfo }) => {
  return <div>{JSON.stringify(businessInfo)}</div>;
};
