import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';
import { navigate, routes } from '@redwoodjs/router';
import DeliveryTextForm from 'src/components/DeliveryText/DeliveryTextForm';

const CREATE_DELIVERY_TEXT_MUTATION = gql`
  mutation CreateDeliveryTextMutation($input: CreateDeliveryTextInput!) {
    createDeliveryText(input: $input) {
      id
    }
  }
`;

const NewDeliveryText = () => {
  const [createDeliveryText, { loading, error }] = useMutation(
    CREATE_DELIVERY_TEXT_MUTATION,
    {
      onCompleted: () => {
        toast.success('DeliveryText created');
        navigate(routes.deliveryTexts());
      },
      onError: error => {
        toast.error(error.message);
      },
    }
  );

  const onSave = input => {
    createDeliveryText({ variables: { input } });
  };

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New DeliveryText</h2>
      </header>
      <div className="rw-segment-main">
        <DeliveryTextForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  );
};

export default NewDeliveryText;
