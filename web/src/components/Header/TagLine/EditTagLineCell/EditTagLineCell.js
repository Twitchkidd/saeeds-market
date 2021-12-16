import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';
import { navigate, routes } from '@redwoodjs/router';

import TagLineForm from 'src/components/TagLine/TagLineForm';

export const QUERY = gql`
  query EditTagLineById($id: Int!) {
    tagLine: tagLine(id: $id) {
      id
      text
      createdAt
    }
  }
`;
const UPDATE_TAG_LINE_MUTATION = gql`
  mutation UpdateTagLineMutation($id: Int!, $input: UpdateTagLineInput!) {
    updateTagLine(id: $id, input: $input) {
      id
      text
      createdAt
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
);

export const Success = ({ tagLine }) => {
  const [updateTagLine, { loading, error }] = useMutation(
    UPDATE_TAG_LINE_MUTATION,
    {
      onCompleted: () => {
        toast.success('TagLine updated');
        navigate(routes.tagLines());
      },
      onError: (error) => {
        toast.error(error.message);
      },
    }
  );

  const onSave = (input, id) => {
    updateTagLine({ variables: { id, input } });
  };

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit TagLine {tagLine.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <TagLineForm
          tagLine={tagLine}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  );
};
