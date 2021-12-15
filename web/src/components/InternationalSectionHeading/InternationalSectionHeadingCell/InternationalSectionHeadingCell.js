import InternationalSectionHeading from 'src/components/InternationalSectionHeading/InternationalSectionHeading';

export const QUERY = gql`
  query FindInternationalSectionHeadingById($id: Int!) {
    internationalSectionHeading: internationalSectionHeading(id: $id) {
      id
      text
      createdAt
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => <div>InternationalSectionHeading not found</div>;

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
);

export const Success = ({ internationalSectionHeading }) => {
  return (
    <InternationalSectionHeading
      internationalSectionHeading={internationalSectionHeading}
    />
  );
};
