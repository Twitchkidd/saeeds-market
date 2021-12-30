export const QUERY = gql`
  query FindBusinessInfosQuery {
    businessInfos {
      name
      address
      hours
      number
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => <div>Empty</div>;

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
);

export const Success = ({ businessInfos }) => {
  const info = businessInfos[0];
  return (
    <>
      <p>{info.name}</p>
      <p>{info.addess}</p>
      <p>{info.hours}</p>
      <p>{info.number}</p>
    </>
  );
};
