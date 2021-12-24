import TagLineText from '../TagLineText/TagLineText';

export const QUERY = gql`
  query FindTagLinesQuery {
    tagLines {
      text
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => <div>Empty</div>;

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
);

export const Success = ({ tagLines }) => {
  return <TagLineText>{tagLines[0].text}</TagLineText>;
};
