import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';
import { navigate, routes } from '@redwoodjs/router';
import PrimaryCallToActionTextForm from 'src/components/PrimaryCallToActionText/PrimaryCallToActionTextForm';

const CREATE_PRIMARY_CALL_TO_ACTION_TEXT_MUTATION = gql`
  mutation CreatePrimaryCallToActionTextMutation(
    $input: CreatePrimaryCallToActionTextInput!
  ) {
    createPrimaryCallToActionText(input: $input) {
      id
    }
  }
`;

const NewPrimaryCallToActionText = () => {
  const [createPrimaryCallToActionText, { loading, error }] = useMutation(
    CREATE_PRIMARY_CALL_TO_ACTION_TEXT_MUTATION,
    {
      onCompleted: () => {
        toast.success('PrimaryCallToActionText created');
        navigate(routes.primaryCallToActionTexts());
      },
      onError: error => {
        toast.error(error.message);
      },
    }
  );

  const onSave = input => {
    createPrimaryCallToActionText({ variables: { input } });
  };

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          New PrimaryCallToActionText
        </h2>
      </header>
      <div className="rw-segment-main">
        <PrimaryCallToActionTextForm
          onSave={onSave}
          loading={loading}
          error={error}
        />
      </div>
    </div>
  );
};

export default NewPrimaryCallToActionText;
