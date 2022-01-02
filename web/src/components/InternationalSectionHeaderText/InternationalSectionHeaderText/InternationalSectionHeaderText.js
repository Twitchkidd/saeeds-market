import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';
import { Link, routes, navigate } from '@redwoodjs/router';

const DELETE_INTERNATIONAL_SECTION_HEADER_TEXT_MUTATION = gql`
  mutation DeleteInternationalSectionHeaderTextMutation($id: Int!) {
    deleteInternationalSectionHeaderText(id: $id) {
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

const InternationalSectionHeaderText = ({ internationalSectionHeaderText }) => {
  const [deleteInternationalSectionHeaderText] = useMutation(
    DELETE_INTERNATIONAL_SECTION_HEADER_TEXT_MUTATION,
    {
      onCompleted: () => {
        toast.success('InternationalSectionHeaderText deleted');
        navigate(routes.internationalSectionHeaderTexts());
      },
      onError: error => {
        toast.error(error.message);
      },
    }
  );

  const onDeleteClick = id => {
    if (
      confirm(
        'Are you sure you want to delete internationalSectionHeaderText ' +
          id +
          '?'
      )
    ) {
      deleteInternationalSectionHeaderText({ variables: { id } });
    }
  };

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            InternationalSectionHeaderText {internationalSectionHeaderText.id}{' '}
            Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{internationalSectionHeaderText.id}</td>
            </tr>
            <tr>
              <th>Text</th>
              <td>{internationalSectionHeaderText.text}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(internationalSectionHeaderText.createdAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editInternationalSectionHeaderText({
            id: internationalSectionHeaderText.id,
          })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(internationalSectionHeaderText.id)}
        >
          Delete
        </button>
      </nav>
    </>
  );
};

export default InternationalSectionHeaderText;
