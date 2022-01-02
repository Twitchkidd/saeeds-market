import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';
import { navigate, routes } from '@redwoodjs/router';
import WithFromTextForm from 'src/components/WithFromText/WithFromTextForm';

const CREATE_WITH_FROM_TEXT_MUTATION = gql`
  mutation CreateWithFromTextMutation($input: CreateWithFromTextInput!) {
    createWithFromText(input: $input) {
      id
    }
  }
`;

const NewWithFromText = () => {
  const [createWithFromText, { loading, error }] = useMutation(
    CREATE_WITH_FROM_TEXT_MUTATION,
    {
      onCompleted: () => {
        toast.success('WithFromText created');
        navigate(routes.withFromTexts());
      },
      onError: error => {
        toast.error(error.message);
      },
    }
  );

  const onSave = input => {
    createWithFromText({ variables: { input } });
  };

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New WithFromText</h2>
      </header>
      <div className="rw-segment-main">
        <WithFromTextForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  );
};

export default NewWithFromText;
