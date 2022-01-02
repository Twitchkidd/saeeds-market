import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';
import { navigate, routes } from '@redwoodjs/router';
import TagLineTextForm from 'src/components/TagLineText/TagLineTextForm';

const CREATE_TAG_LINE_TEXT_MUTATION = gql`
  mutation CreateTagLineTextMutation($input: CreateTagLineTextInput!) {
    createTagLineText(input: $input) {
      id
    }
  }
`;

const NewTagLineText = () => {
  const [createTagLineText, { loading, error }] = useMutation(
    CREATE_TAG_LINE_TEXT_MUTATION,
    {
      onCompleted: () => {
        toast.success('TagLineText created');
        navigate(routes.tagLineTexts());
      },
      onError: error => {
        toast.error(error.message);
      },
    }
  );

  const onSave = input => {
    createTagLineText({ variables: { input } });
  };

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New TagLineText</h2>
      </header>
      <div className="rw-segment-main">
        <TagLineTextForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  );
};

export default NewTagLineText;
