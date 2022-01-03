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

export const Loading = () => <TagLine>Loading...</TagLine>;

export const Empty = () => <TagLine>Empty</TagLine>;

export const Failure = ({ error }) => (
  <TagLine style={{ color: 'red' }}>Error: {error.message}</TagLine>
);

export const Success = ({ tagLineTexts }) => {
  return <TagLine>{tagLineTexts[0].text}</TagLine>;
};
