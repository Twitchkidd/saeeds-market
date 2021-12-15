import WhatsNewHeader from 'src/components/WhatsNewHeader/WhatsNewHeader';

export const QUERY = gql`
  query FindWhatsNewHeaderById($id: Int!) {
    whatsNewHeader: whatsNewHeader(id: $id) {
      id
      text
      createdAt
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => <div>WhatsNewHeader not found</div>;

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
);

export const Success = ({ whatsNewHeader }) => {
  return <WhatsNewHeader whatsNewHeader={whatsNewHeader} />;
};
