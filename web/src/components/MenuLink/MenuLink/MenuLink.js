import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';
import { Link, routes, navigate } from '@redwoodjs/router';

const DELETE_MENU_LINK_MUTATION = gql`
  mutation DeleteMenuLinkMutation($id: Int!) {
    deleteMenuLink(id: $id) {
      id
    }
  }
`;

const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  );
};

const timeTag = (datetime) => {
  return (
    <time dateTime={datetime} title={datetime}>
      {new Date(datetime).toUTCString()}
    </time>
  );
};

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />;
};

const MenuLink = ({ menuLink }) => {
  const [deleteMenuLink] = useMutation(DELETE_MENU_LINK_MUTATION, {
    onCompleted: () => {
      toast.success('MenuLink deleted');
      navigate(routes.menuLinks());
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete menuLink ' + id + '?')) {
      deleteMenuLink({ variables: { id } });
    }
  };

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            MenuLink {menuLink.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{menuLink.id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{menuLink.name}</td>
            </tr>
            <tr>
              <th>Text</th>
              <td>{menuLink.text}</td>
            </tr>
            <tr>
              <th>Url</th>
              <td>{menuLink.url}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(menuLink.createdAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editMenuLink({ id: menuLink.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(menuLink.id)}
        >
          Delete
        </button>
      </nav>
    </>
  );
};

export default MenuLink;
