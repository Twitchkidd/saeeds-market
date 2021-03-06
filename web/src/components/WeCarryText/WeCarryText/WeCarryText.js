import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';
import { Link, routes, navigate } from '@redwoodjs/router';

const DELETE_WE_CARRY_TEXT_MUTATION = gql`
  mutation DeleteWeCarryTextMutation($id: Int!) {
    deleteWeCarryText(id: $id) {
      id
    }
  }
`;

const jsonDisplay = obj => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  );
};

const timeTag = datetime => {
  return (
    <time dateTime={datetime} title={datetime}>
      {new Date(datetime).toUTCString()}
    </time>
  );
};

const checkboxInputTag = checked => {
  return <input type="checkbox" checked={checked} disabled />;
};

const WeCarryText = ({ weCarryText }) => {
  const [deleteWeCarryText] = useMutation(DELETE_WE_CARRY_TEXT_MUTATION, {
    onCompleted: () => {
      toast.success('WeCarryText deleted');
      navigate(routes.weCarryTexts());
    },
    onError: error => {
      toast.error(error.message);
    },
  });

  const onDeleteClick = id => {
    if (confirm('Are you sure you want to delete weCarryText ' + id + '?')) {
      deleteWeCarryText({ variables: { id } });
    }
  };

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            WeCarryText {weCarryText.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{weCarryText.id}</td>
            </tr>
            <tr>
              <th>Text</th>
              <td>{weCarryText.text}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(weCarryText.createdAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editWeCarryText({ id: weCarryText.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(weCarryText.id)}
        >
          Delete
        </button>
      </nav>
    </>
  );
};

export default WeCarryText;
