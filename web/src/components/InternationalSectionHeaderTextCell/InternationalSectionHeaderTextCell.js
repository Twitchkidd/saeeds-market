export const QUERY = gql`
  query FindInternationalSectionHeaderTextsQuery {
    internationalSectionHeaderTexts {
      text
    }
  }
`;

export const Loading = () => 'Loading';

export const Empty = () => 'Empty';

export const Failure = ({ error }) => (
  <span style={{ color: 'red' }}>Error: {error.message}</span>
);

export const Success = ({ internationalSectionHeaderTexts }) =>
  internationalSectionHeaderTexts[0].text;
