import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';
import { Link, routes } from '@redwoodjs/router';

import { QUERY } from 'src/components/NewItem/NewItemsCell';

const DELETE_NEW_ITEM_MUTATION = gql`
  mutation DeleteNewItemMutation($id: Int!) {
    deleteNewItem(id: $id) {
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

const NewItemsList = ({ newItems }) => {
  const [deleteNewItem] = useMutation(DELETE_NEW_ITEM_MUTATION, {
    onCompleted: () => {
      toast.success('NewItem deleted');
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
    if (confirm('Are you sure you want to delete newItem ' + id + '?')) {
      deleteNewItem({ variables: { id } });
    }
  };

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Description</th>
            <th>Created at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {newItems.map((newItem) => (
            <tr key={newItem.id}>
              <td>{truncate(newItem.id)}</td>
              <td>{truncate(newItem.title)}</td>
              <td>{truncate(newItem.description)}</td>
              <td>{timeTag(newItem.createdAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.newItem({ id: newItem.id })}
                    title={'Show newItem ' + newItem.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editNewItem({ id: newItem.id })}
                    title={'Edit newItem ' + newItem.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete newItem ' + newItem.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(newItem.id)}
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

export default NewItemsList;
