import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';
import { navigate, routes } from '@redwoodjs/router';

import DeliveryLinkForm from 'src/components/DeliveryLink/DeliveryLinkForm';

export const QUERY = gql`
  query EditDeliveryLinkById($id: Int!) {
    deliveryLink: deliveryLink(id: $id) {
      id
      name
      url
      createdAt
    }
  }
`;
const UPDATE_DELIVERY_LINK_MUTATION = gql`
  mutation UpdateDeliveryLinkMutation(
    $id: Int!
    $input: UpdateDeliveryLinkInput!
  ) {
    updateDeliveryLink(id: $id, input: $input) {
      id
      name
      url
      createdAt
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
);

export const Success = ({ deliveryLink }) => {
  const [updateDeliveryLink, { loading, error }] = useMutation(
    UPDATE_DELIVERY_LINK_MUTATION,
    {
      onCompleted: () => {
        toast.success('DeliveryLink updated');
        navigate(routes.deliveryLinks());
      },
      onError: (error) => {
        toast.error(error.message);
      },
    }
  );

  const onSave = (input, id) => {
    updateDeliveryLink({ variables: { id, input } });
  };

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit DeliveryLink {deliveryLink.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <DeliveryLinkForm
          deliveryLink={deliveryLink}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  );
};
