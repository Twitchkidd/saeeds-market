import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';
import { navigate, routes } from '@redwoodjs/router';
import WhatsNewTextForm from 'src/components/WhatsNewText/WhatsNewTextForm';

const CREATE_WHATS_NEW_TEXT_MUTATION = gql`
  mutation CreateWhatsNewTextMutation($input: CreateWhatsNewTextInput!) {
    createWhatsNewText(input: $input) {
      id
    }
  }
`;

const NewWhatsNewText = () => {
  const [createWhatsNewText, { loading, error }] = useMutation(
    CREATE_WHATS_NEW_TEXT_MUTATION,
    {
      onCompleted: () => {
        toast.success('WhatsNewText created');
        navigate(routes.whatsNewTexts());
      },
      onError: error => {
        toast.error(error.message);
      },
    }
  );

  const onSave = input => {
    createWhatsNewText({ variables: { input } });
  };

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New WhatsNewText</h2>
      </header>
      <div className="rw-segment-main">
        <WhatsNewTextForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  );
};

export default NewWhatsNewText;
