export const QUERY = gql`
  query FindInternationalSectionHeaderTextsQuery {
    internationalSectionHeaderTexts {
      text
    }
  }
`;

export const Loading = () => 'International Specialties';

export const Empty = () => <div>Empty</div>;

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
);

export const Success = ({ internationalSectionHeaderTexts }) =>
  internationalSectionHeaderTexts[0].text;
