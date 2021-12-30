import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';
import { navigate, routes } from '@redwoodjs/router';

import DeliveryTextForm from 'src/components/DeliveryText/DeliveryTextForm';

export const QUERY = gql`
  query EditDeliveryTextById($id: Int!) {
    deliveryText: deliveryText(id: $id) {
      id
      text
      createdAt
    }
  }
`;
const UPDATE_DELIVERY_TEXT_MUTATION = gql`
  mutation UpdateDeliveryTextMutation(
    $id: Int!
    $input: UpdateDeliveryTextInput!
  ) {
    updateDeliveryText(id: $id, input: $input) {
      id
      text
      createdAt
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
);

export const Success = ({ deliveryText }) => {
  const [updateDeliveryText, { loading, error }] = useMutation(
    UPDATE_DELIVERY_TEXT_MUTATION,
    {
      onCompleted: () => {
        toast.success('DeliveryText updated');
        navigate(routes.deliveryTexts());
      },
      onError: error => {
        toast.error(error.message);
      },
    }
  );

  const onSave = (input, id) => {
    updateDeliveryText({ variables: { id, input } });
  };

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit DeliveryText {deliveryText.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <DeliveryTextForm
          deliveryText={deliveryText}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  );
};
