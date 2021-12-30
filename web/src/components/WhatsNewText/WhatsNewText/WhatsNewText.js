import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';
import { Link, routes, navigate } from '@redwoodjs/router';

const DELETE_WHATS_NEW_TEXT_MUTATION = gql`
  mutation DeleteWhatsNewTextMutation($id: Int!) {
    deleteWhatsNewText(id: $id) {
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

const WhatsNewText = ({ whatsNewText }) => {
  const [deleteWhatsNewText] = useMutation(DELETE_WHATS_NEW_TEXT_MUTATION, {
    onCompleted: () => {
      toast.success('WhatsNewText deleted');
      navigate(routes.whatsNewTexts());
    },
    onError: error => {
      toast.error(error.message);
    },
  });

  const onDeleteClick = id => {
    if (confirm('Are you sure you want to delete whatsNewText ' + id + '?')) {
      deleteWhatsNewText({ variables: { id } });
    }
  };

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            WhatsNewText {whatsNewText.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{whatsNewText.id}</td>
            </tr>
            <tr>
              <th>Text</th>
              <td>{whatsNewText.text}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(whatsNewText.createdAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editWhatsNewText({ id: whatsNewText.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(whatsNewText.id)}
        >
          Delete
        </button>
      </nav>
    </>
  );
};

export default WhatsNewText;
