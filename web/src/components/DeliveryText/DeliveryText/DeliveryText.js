import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';
import { Link, routes, navigate } from '@redwoodjs/router';

const DELETE_DELIVERY_TEXT_MUTATION = gql`
  mutation DeleteDeliveryTextMutation($id: Int!) {
    deleteDeliveryText(id: $id) {
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

const DeliveryText = ({ deliveryText }) => {
  const [deleteDeliveryText] = useMutation(DELETE_DELIVERY_TEXT_MUTATION, {
    onCompleted: () => {
      toast.success('DeliveryText deleted');
      navigate(routes.deliveryTexts());
    },
    onError: error => {
      toast.error(error.message);
    },
  });

  const onDeleteClick = id => {
    if (confirm('Are you sure you want to delete deliveryText ' + id + '?')) {
      deleteDeliveryText({ variables: { id } });
    }
  };

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            DeliveryText {deliveryText.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{deliveryText.id}</td>
            </tr>
            <tr>
              <th>Text</th>
              <td>{deliveryText.text}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(deliveryText.createdAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editDeliveryText({ id: deliveryText.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(deliveryText.id)}
        >
          Delete
        </button>
      </nav>
    </>
  );
};

export default DeliveryText;
