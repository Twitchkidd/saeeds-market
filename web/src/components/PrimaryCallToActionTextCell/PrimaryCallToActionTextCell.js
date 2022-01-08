export const QUERY = gql`
  query FindPrimaryCallToActionTextsQuery {
    primaryCallToActionTexts {
      text
    }
  }
`;

export const Loading = () => 'Call In: 860.440.2238';

export const Empty = () => <div>Empty</div>;

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
);

export const Success = ({ primaryCallToActionTexts }) =>
  primaryCallToActionTexts[0].text;
