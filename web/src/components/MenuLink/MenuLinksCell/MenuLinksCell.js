import { Link, routes } from '@redwoodjs/router';

import MenuLinks from 'src/components/MenuLink/MenuLinks';

export const QUERY = gql`
  query FindMenuLinks {
    menuLinks {
      id
      name
      text
      url
      createdAt
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No menuLinks yet. '}
      <Link to={routes.newMenuLink()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  );
};

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
);

export const Success = ({ menuLinks }) => {
  return <MenuLinks menuLinks={menuLinks} />;
};
