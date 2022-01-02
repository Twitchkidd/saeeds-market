import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';
import { navigate, routes } from '@redwoodjs/router';
import WeCarryTextForm from 'src/components/WeCarryText/WeCarryTextForm';

const CREATE_WE_CARRY_TEXT_MUTATION = gql`
  mutation CreateWeCarryTextMutation($input: CreateWeCarryTextInput!) {
    createWeCarryText(input: $input) {
      id
    }
  }
`;

const NewWeCarryText = () => {
  const [createWeCarryText, { loading, error }] = useMutation(
    CREATE_WE_CARRY_TEXT_MUTATION,
    {
      onCompleted: () => {
        toast.success('WeCarryText created');
        navigate(routes.weCarryTexts());
      },
      onError: error => {
        toast.error(error.message);
      },
    }
  );

  const onSave = input => {
    createWeCarryText({ variables: { input } });
  };

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New WeCarryText</h2>
      </header>
      <div className="rw-segment-main">
        <WeCarryTextForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  );
};

export default NewWeCarryText;
