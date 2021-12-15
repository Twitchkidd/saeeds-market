import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';
import { Link, routes, navigate } from '@redwoodjs/router';

const DELETE_DELIVERY_LINK_MUTATION = gql`
  mutation DeleteDeliveryLinkMutation($id: Int!) {
    deleteDeliveryLink(id: $id) {
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

const DeliveryLink = ({ deliveryLink }) => {
  const [deleteDeliveryLink] = useMutation(DELETE_DELIVERY_LINK_MUTATION, {
    onCompleted: () => {
      toast.success('DeliveryLink deleted');
      navigate(routes.deliveryLinks());
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete deliveryLink ' + id + '?')) {
      deleteDeliveryLink({ variables: { id } });
    }
  };

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            DeliveryLink {deliveryLink.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{deliveryLink.id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{deliveryLink.name}</td>
            </tr>
            <tr>
              <th>Url</th>
              <td>{deliveryLink.url}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(deliveryLink.createdAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editDeliveryLink({ id: deliveryLink.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(deliveryLink.id)}
        >
          Delete
        </button>
      </nav>
    </>
  );
};

export default DeliveryLink;
