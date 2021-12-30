import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';
import { Link, routes, navigate } from '@redwoodjs/router';

const DELETE_BUSINESS_INFO_MUTATION = gql`
  mutation DeleteBusinessInfoMutation($id: Int!) {
    deleteBusinessInfo(id: $id) {
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

const BusinessInfo = ({ businessInfo }) => {
  const [deleteBusinessInfo] = useMutation(DELETE_BUSINESS_INFO_MUTATION, {
    onCompleted: () => {
      toast.success('BusinessInfo deleted');
      navigate(routes.businessInfos());
    },
    onError: error => {
      toast.error(error.message);
    },
  });

  const onDeleteClick = id => {
    if (confirm('Are you sure you want to delete businessInfo ' + id + '?')) {
      deleteBusinessInfo({ variables: { id } });
    }
  };

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            BusinessInfo {businessInfo.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{businessInfo.id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{businessInfo.name}</td>
            </tr>
            <tr>
              <th>Address</th>
              <td>{businessInfo.address}</td>
            </tr>
            <tr>
              <th>Hours</th>
              <td>{businessInfo.hours}</td>
            </tr>
            <tr>
              <th>Number</th>
              <td>{businessInfo.number}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(businessInfo.createdAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editBusinessInfo({ id: businessInfo.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(businessInfo.id)}
        >
          Delete
        </button>
      </nav>
    </>
  );
};

export default BusinessInfo;
