import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';
import { Link, routes, navigate } from '@redwoodjs/router';

const DELETE_INTERNATIONAL_SECTION_HEADING_MUTATION = gql`
  mutation DeleteInternationalSectionHeadingMutation($id: Int!) {
    deleteInternationalSectionHeading(id: $id) {
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

const InternationalSectionHeading = ({ internationalSectionHeading }) => {
  const [deleteInternationalSectionHeading] = useMutation(
    DELETE_INTERNATIONAL_SECTION_HEADING_MUTATION,
    {
      onCompleted: () => {
        toast.success('InternationalSectionHeading deleted');
        navigate(routes.internationalSectionHeadings());
      },
      onError: (error) => {
        toast.error(error.message);
      },
    }
  );

  const onDeleteClick = (id) => {
    if (
      confirm(
        'Are you sure you want to delete internationalSectionHeading ' +
          id +
          '?'
      )
    ) {
      deleteInternationalSectionHeading({ variables: { id } });
    }
  };

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            InternationalSectionHeading {internationalSectionHeading.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{internationalSectionHeading.id}</td>
            </tr>
            <tr>
              <th>Text</th>
              <td>{internationalSectionHeading.text}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(internationalSectionHeading.createdAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editInternationalSectionHeading({
            id: internationalSectionHeading.id,
          })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(internationalSectionHeading.id)}
        >
          Delete
        </button>
      </nav>
    </>
  );
};

export default InternationalSectionHeading;
