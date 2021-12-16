import styled from 'styled-components';

const Heading = styled.h3`
  text-align: center;
`;

const TagLine = ({ text }) => (
  <Heading>
    <em>{text}</em>
  </Heading>
);

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
  return <TagLine text={tagLines[0].text} />;
};
