import WhatsNewText from 'src/components/WhatsNewText/WhatsNewText';

export const QUERY = gql`
  query FindWhatsNewTextById($id: Int!) {
    whatsNewText: whatsNewText(id: $id) {
      id
      text
      createdAt
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => <div>WhatsNewText not found</div>;

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
);

export const Success = ({ whatsNewText }) => {
  return <WhatsNewText whatsNewText={whatsNewText} />;
};
