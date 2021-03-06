import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';
import { Link, routes, navigate } from '@redwoodjs/router';

const DELETE_NEW_ITEM_MUTATION = gql`
  mutation DeleteNewItemMutation($id: Int!) {
    deleteNewItem(id: $id) {
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

const NewItem = ({ newItem }) => {
  const [deleteNewItem] = useMutation(DELETE_NEW_ITEM_MUTATION, {
    onCompleted: () => {
      toast.success('NewItem deleted');
      navigate(routes.newItems());
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete newItem ' + id + '?')) {
      deleteNewItem({ variables: { id } });
    }
  };

  const thumbnail = (url) => {
    const parts = url.split('/');
    parts.splice(3, 0, 'resize=width:100');
    return parts.join('/');
  };

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            NewItem {newItem.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{newItem.id}</td>
            </tr>
            <tr>
              <th>Title</th>
              <td>{newItem.title}</td>
            </tr>
            <tr>
              <th>Description</th>
              <td>{newItem.description}</td>
            </tr>
            <tr>
              <td>
                <a href={newItem.imageUrl} target="_blank">
                  <img
                    src={thumbnail(newItem.imageUrl)}
                    style={{ maxWidth: '50px' }}
                  />
                </a>
              </td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(newItem.createdAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editNewItem({ id: newItem.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(newItem.id)}
        >
          Delete
        </button>
      </nav>
    </>
  );
};

export default NewItem;
