import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';
import { Link, routes } from '@redwoodjs/router';

import { QUERY } from 'src/components/MenuLinks/MenuLink/MenuLinksCell';

const DELETE_MENU_LINK_MUTATION = gql`
  mutation DeleteMenuLinkMutation($id: Int!) {
    deleteMenuLink(id: $id) {
      id
    }
  }
`;

const MAX_STRING_LENGTH = 150;

const truncate = (text) => {
  let output = text;
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...';
  }
  return output;
};

const jsonTruncate = (obj) => {
  return truncate(JSON.stringify(obj, null, 2));
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

const MenuLinksList = ({ menuLinks }) => {
  const [deleteMenuLink] = useMutation(DELETE_MENU_LINK_MUTATION, {
    onCompleted: () => {
      toast.success('MenuLink deleted');
    },
    onError: (error) => {
      toast.error(error.message);
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  });

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete menuLink ' + id + '?')) {
      deleteMenuLink({ variables: { id } });
    }
  };

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Text</th>
            <th>Url</th>
            <th>Created at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {menuLinks.map((menuLink) => (
            <tr key={menuLink.id}>
              <td>{truncate(menuLink.id)}</td>
              <td>{truncate(menuLink.name)}</td>
              <td>{truncate(menuLink.text)}</td>
              <td>{truncate(menuLink.url)}</td>
              <td>{timeTag(menuLink.createdAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.menuLink({ id: menuLink.id })}
                    title={'Show menuLink ' + menuLink.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editMenuLink({ id: menuLink.id })}
                    title={'Edit menuLink ' + menuLink.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete menuLink ' + menuLink.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(menuLink.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MenuLinksList;
