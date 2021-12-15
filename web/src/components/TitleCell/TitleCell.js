import styled from 'styled-components';

const Title = styled.h1`
  max-width: 10rem;
  text-align: center;
`;

export const QUERY = gql`
  query FindTitlesQuery {
    titles {
      text
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => <div>Empty</div>;

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
);

export const Success = ({ titles }) => {
  return <Title>{titles[0].text}</Title>;
};
