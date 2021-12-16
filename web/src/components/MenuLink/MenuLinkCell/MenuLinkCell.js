import MenuLink from 'src/components/MenuLink/MenuLink';

export const QUERY = gql`
  query FindMenuLinkById($id: Int!) {
    menuLink: menuLink(id: $id) {
      id
      name
      text
      url
      createdAt
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => <div>MenuLink not found</div>;

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
);

export const Success = ({ menuLink }) => {
  return <MenuLink menuLink={menuLink} />;
};
