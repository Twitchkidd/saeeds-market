import styled from 'styled-components';
import { fontSize4 } from 'src/utils/typography';
import { verticalKeyline2 } from 'src/utils/spacing';

const TagLineText = styled.h2`
  max-width: ${verticalKeyline2};
  text-align: center;
  font-size: ${fontSize4};
`;

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
