export const QUERY = gql`
  query FindWhatsNewTextsQuery {
    whatsNewTexts {
      text
    }
  }
`;

export const Loading = () => "What's New";

export const Empty = () => <div>Empty</div>;

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
);

export const Success = ({ whatsNewTexts }) => whatsNewTexts[0].text;
