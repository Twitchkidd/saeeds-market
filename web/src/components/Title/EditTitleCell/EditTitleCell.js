import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';
import { navigate, routes } from '@redwoodjs/router';

import TitleForm from 'src/components/Title/TitleForm';

export const QUERY = gql`
  query EditTitleById($id: Int!) {
    title: title(id: $id) {
      id
      text
      createdAt
    }
  }
`;
const UPDATE_TITLE_MUTATION = gql`
  mutation UpdateTitleMutation($id: Int!, $input: UpdateTitleInput!) {
    updateTitle(id: $id, input: $input) {
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

export const Success = ({ title }) => {
  const [updateTitle, { loading, error }] = useMutation(UPDATE_TITLE_MUTATION, {
    onCompleted: () => {
      toast.success('Title updated');
      navigate(routes.titles());
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const onSave = (input, id) => {
    updateTitle({ variables: { id, input } });
  };

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Title {title.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <TitleForm
          title={title}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  );
};
