import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';
import { Link, routes, navigate } from '@redwoodjs/router';

const DELETE_PRIMARY_CALL_TO_ACTION_TEXT_MUTATION = gql`
  mutation DeletePrimaryCallToActionTextMutation($id: Int!) {
    deletePrimaryCallToActionText(id: $id) {
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

const PrimaryCallToActionText = ({ primaryCallToActionText }) => {
  const [deletePrimaryCallToActionText] = useMutation(
    DELETE_PRIMARY_CALL_TO_ACTION_TEXT_MUTATION,
    {
      onCompleted: () => {
        toast.success('PrimaryCallToActionText deleted');
        navigate(routes.primaryCallToActionTexts());
      },
      onError: error => {
        toast.error(error.message);
      },
    }
  );

  const onDeleteClick = id => {
    if (
      confirm(
        'Are you sure you want to delete primaryCallToActionText ' + id + '?'
      )
    ) {
      deletePrimaryCallToActionText({ variables: { id } });
    }
  };

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            PrimaryCallToActionText {primaryCallToActionText.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{primaryCallToActionText.id}</td>
            </tr>
            <tr>
              <th>Text</th>
              <td>{primaryCallToActionText.text}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(primaryCallToActionText.createdAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editPrimaryCallToActionText({
            id: primaryCallToActionText.id,
          })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(primaryCallToActionText.id)}
        >
          Delete
        </button>
      </nav>
    </>
  );
};

export default PrimaryCallToActionText;
