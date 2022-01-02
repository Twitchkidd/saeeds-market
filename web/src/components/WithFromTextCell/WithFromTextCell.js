import DisplayText from 'src/components/DisplayText/DisplayText';

export const QUERY = gql`
  query FindWithFromTextsQuery {
    withFromTexts {
      text
    }
  }
`;

export const Loading = () => <DisplayText>Loading...</DisplayText>;

export const Empty = () => <DisplayText>Empty</DisplayText>;

export const Failure = ({ error }) => (
  <DisplayText style={{ color: 'red' }}>Error: {error.message}</DisplayText>
);

export const Success = ({ withFromTexts }) => (
  <DisplayText>{withFromTexts[0].text}</DisplayText>
);
