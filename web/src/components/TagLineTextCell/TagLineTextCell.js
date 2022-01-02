import styled from 'styled-components';
import { fontSize4 } from 'src/utils/typography';
import { verticalKeyline2 } from 'src/utils/spacing';

const TagLine = styled.h2`
  max-width: ${verticalKeyline2};
  text-align: center;
  font-size: ${fontSize4};
`;

export const QUERY = gql`
  query FindTagLineTextsQuery {
    tagLineTexts {
      text
    }
  }
`;

export const Loading = () => <h2>Loading...</h2>;

export const Empty = () => <h2>Empty</h2>;

export const Failure = ({ error }) => (
  <h2 style={{ color: 'red' }}>Error: {error.message}</h2>
);

export const Success = ({ tagLineTexts }) => {
  return <TagLine>{tagLineTexts[0].text}</TagLine>;
};
