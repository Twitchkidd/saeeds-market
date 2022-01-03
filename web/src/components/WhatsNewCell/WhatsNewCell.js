export const QUERY = gql`
  query FindWhatsNewQuery {
    newItems {
      title
      description
      imageUrl
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => <div>Empty</div>;

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
);

export const Success = ({ newItems }) => {
  return newItems.map((item, i) => (
    <>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <img src={item.imageUrl} alt={item.title} style={{ width: '100%' }} />
    </>
  ));
};
