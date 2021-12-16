import styled from 'styled-components';
import { greekBlue } from 'src/utils/colors';

const MenuLink = styled.a`
  color: ${greekBlue};
  font-size: 20px;
  padding: 8px;
`;

export const QUERY = gql`
  query FindMenuLinksQuery {
    menuLinks {
      text
      url
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => <div>Empty</div>;

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
);

export const Success = ({ menuLinks }) => {
  const cafe = menuLinks[0];
  const catering = menuLinks[1];
  return (
    <>
      <MenuLink href={cafe.url}>{cafe.text}</MenuLink>
      <MenuLink href={catering.url}>{catering.text}</MenuLink>
    </>
  );
};
