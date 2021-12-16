import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';
import { Link, routes, navigate } from '@redwoodjs/router';

const DELETE_TAG_LINE_MUTATION = gql`
  mutation DeleteTagLineMutation($id: Int!) {
    deleteTagLine(id: $id) {
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

const TagLine = ({ tagLine }) => {
  const [deleteTagLine] = useMutation(DELETE_TAG_LINE_MUTATION, {
    onCompleted: () => {
      toast.success('TagLine deleted');
      navigate(routes.tagLines());
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete tagLine ' + id + '?')) {
      deleteTagLine({ variables: { id } });
    }
  };

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            TagLine {tagLine.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{tagLine.id}</td>
            </tr>
            <tr>
              <th>Text</th>
              <td>{tagLine.text}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(tagLine.createdAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editTagLine({ id: tagLine.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(tagLine.id)}
        >
          Delete
        </button>
      </nav>
    </>
  );
};

export default TagLine;
