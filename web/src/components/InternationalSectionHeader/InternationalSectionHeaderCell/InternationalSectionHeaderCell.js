import InternationalSectionHeader from 'src/components/InternationalSectionHeader/InternationalSectionHeader';

export const QUERY = gql`
  query FindInternationalSectionHeaderById($id: Int!) {
    internationalSectionHeader: internationalSectionHeader(id: $id) {
      id
      text
      withFrom
      createdAt
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => <div>InternationalSectionHeader not found</div>;

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
);

export const Success = ({ internationalSectionHeader }) => {
  return (
    <InternationalSectionHeader
      internationalSectionHeader={internationalSectionHeader}
    />
  );
};
