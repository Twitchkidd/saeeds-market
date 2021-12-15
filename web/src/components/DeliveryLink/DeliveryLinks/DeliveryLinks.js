import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';
import { Link, routes } from '@redwoodjs/router';

import { QUERY } from 'src/components/DeliveryLink/DeliveryLinksCell';

const DELETE_DELIVERY_LINK_MUTATION = gql`
  mutation DeleteDeliveryLinkMutation($id: Int!) {
    deleteDeliveryLink(id: $id) {
      id
    }
  }
`;

const MAX_STRING_LENGTH = 150;

const truncate = (text) => {
  let output = text;
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...';
  }
  return output;
};

const jsonTruncate = (obj) => {
  return truncate(JSON.stringify(obj, null, 2));
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

const DeliveryLinksList = ({ deliveryLinks }) => {
  const [deleteDeliveryLink] = useMutation(DELETE_DELIVERY_LINK_MUTATION, {
    onCompleted: () => {
      toast.success('DeliveryLink deleted');
    },
    onError: (error) => {
      toast.error(error.message);
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  });

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete deliveryLink ' + id + '?')) {
      deleteDeliveryLink({ variables: { id } });
    }
  };

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Url</th>
            <th>Created at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {deliveryLinks.map((deliveryLink) => (
            <tr key={deliveryLink.id}>
              <td>{truncate(deliveryLink.id)}</td>
              <td>{truncate(deliveryLink.name)}</td>
              <td>{truncate(deliveryLink.url)}</td>
              <td>{timeTag(deliveryLink.createdAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.deliveryLink({ id: deliveryLink.id })}
                    title={'Show deliveryLink ' + deliveryLink.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editDeliveryLink({ id: deliveryLink.id })}
                    title={'Edit deliveryLink ' + deliveryLink.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete deliveryLink ' + deliveryLink.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(deliveryLink.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DeliveryLinksList;
