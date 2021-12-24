import PrimaryCallToActionText from 'src/components/PrimaryCallToActionText/PrimaryCallToActionText';

export const QUERY = gql`
  query FindPrimaryCallToActionTextById($id: Int!) {
    primaryCallToActionText: primaryCallToActionText(id: $id) {
      id
      text
      createdAt
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => <div>PrimaryCallToActionText not found</div>;

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
);

export const Success = ({ primaryCallToActionText }) => {
  return (
    <PrimaryCallToActionText
      primaryCallToActionText={primaryCallToActionText}
    />
  );
};
