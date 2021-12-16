import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';
import { navigate, routes } from '@redwoodjs/router';
import TagLineForm from 'src/components/Header/TagLine/TagLineForm';

const CREATE_TAG_LINE_MUTATION = gql`
  mutation CreateTagLineMutation($input: CreateTagLineInput!) {
    createTagLine(input: $input) {
      id
    }
  }
`;

const NewTagLine = () => {
  const [createTagLine, { loading, error }] = useMutation(
    CREATE_TAG_LINE_MUTATION,
    {
      onCompleted: () => {
        toast.success('TagLine created');
        navigate(routes.tagLines());
      },
      onError: (error) => {
        toast.error(error.message);
      },
    }
  );

  const onSave = (input) => {
    createTagLine({ variables: { input } });
  };

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New TagLine</h2>
      </header>
      <div className="rw-segment-main">
        <TagLineForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  );
};

export default NewTagLine;
