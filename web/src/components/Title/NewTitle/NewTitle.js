import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';
import { navigate, routes } from '@redwoodjs/router';
import TitleForm from 'src/components/Title/TitleForm';

const CREATE_TITLE_MUTATION = gql`
  mutation CreateTitleMutation($input: CreateTitleInput!) {
    createTitle(input: $input) {
      id
    }
  }
`;

const NewTitle = () => {
  const [createTitle, { loading, error }] = useMutation(CREATE_TITLE_MUTATION, {
    onCompleted: () => {
      toast.success('Title created');
      navigate(routes.titles());
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const onSave = (input) => {
    createTitle({ variables: { input } });
  };

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Title</h2>
      </header>
      <div className="rw-segment-main">
        <TitleForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  );
};

export default NewTitle;
