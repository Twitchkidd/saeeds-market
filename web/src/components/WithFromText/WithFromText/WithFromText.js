import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';
import { Link, routes, navigate } from '@redwoodjs/router';

const DELETE_WITH_FROM_TEXT_MUTATION = gql`
  mutation DeleteWithFromTextMutation($id: Int!) {
    deleteWithFromText(id: $id) {
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

const WithFromText = ({ withFromText }) => {
  const [deleteWithFromText] = useMutation(DELETE_WITH_FROM_TEXT_MUTATION, {
    onCompleted: () => {
      toast.success('WithFromText deleted');
      navigate(routes.withFromTexts());
    },
    onError: error => {
      toast.error(error.message);
    },
  });

  const onDeleteClick = id => {
    if (confirm('Are you sure you want to delete withFromText ' + id + '?')) {
      deleteWithFromText({ variables: { id } });
    }
  };

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            WithFromText {withFromText.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{withFromText.id}</td>
            </tr>
            <tr>
              <th>Text</th>
              <td>{withFromText.text}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(withFromText.createdAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editWithFromText({ id: withFromText.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(withFromText.id)}
        >
          Delete
        </button>
      </nav>
    </>
  );
};

export default WithFromText;
