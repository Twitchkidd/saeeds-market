import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';
import { navigate, routes } from '@redwoodjs/router';
import WhatsNewHeaderForm from 'src/components/WhatsNewHeader/WhatsNewHeaderForm';

const CREATE_WHATS_NEW_HEADER_MUTATION = gql`
  mutation CreateWhatsNewHeaderMutation($input: CreateWhatsNewHeaderInput!) {
    createWhatsNewHeader(input: $input) {
      id
    }
  }
`;

const NewWhatsNewHeader = () => {
  const [createWhatsNewHeader, { loading, error }] = useMutation(
    CREATE_WHATS_NEW_HEADER_MUTATION,
    {
      onCompleted: () => {
        toast.success('WhatsNewHeader created');
        navigate(routes.whatsNewHeaders());
      },
      onError: (error) => {
        toast.error(error.message);
      },
    }
  );

  const onSave = (input) => {
    createWhatsNewHeader({ variables: { input } });
  };

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New WhatsNewHeader</h2>
      </header>
      <div className="rw-segment-main">
        <WhatsNewHeaderForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  );
};

export default NewWhatsNewHeader;
