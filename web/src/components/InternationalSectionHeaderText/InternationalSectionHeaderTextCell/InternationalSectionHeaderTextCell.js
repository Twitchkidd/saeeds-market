import InternationalSectionHeaderText from 'src/components/InternationalSectionHeaderText/InternationalSectionHeaderText';

export const QUERY = gql`
  query FindInternationalSectionHeaderTextById($id: Int!) {
    internationalSectionHeaderText: internationalSectionHeaderText(id: $id) {
      id
      text
      createdAt
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => <div>InternationalSectionHeaderText not found</div>;

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
);

export const Success = ({ internationalSectionHeaderText }) => {
  return (
    <InternationalSectionHeaderText
      internationalSectionHeaderText={internationalSectionHeaderText}
    />
  );
};
