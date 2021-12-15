import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';
import { navigate, routes } from '@redwoodjs/router';
import DeliveryLinkForm from 'src/components/DeliveryLink/DeliveryLinkForm';

const CREATE_DELIVERY_LINK_MUTATION = gql`
  mutation CreateDeliveryLinkMutation($input: CreateDeliveryLinkInput!) {
    createDeliveryLink(input: $input) {
      id
    }
  }
`;

const NewDeliveryLink = () => {
  const [createDeliveryLink, { loading, error }] = useMutation(
    CREATE_DELIVERY_LINK_MUTATION,
    {
      onCompleted: () => {
        toast.success('DeliveryLink created');
        navigate(routes.deliveryLinks());
      },
      onError: (error) => {
        toast.error(error.message);
      },
    }
  );

  const onSave = (input) => {
    createDeliveryLink({ variables: { input } });
  };

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New DeliveryLink</h2>
      </header>
      <div className="rw-segment-main">
        <DeliveryLinkForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  );
};

export default NewDeliveryLink;
