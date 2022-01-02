import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';
import { navigate, routes } from '@redwoodjs/router';

import TagLineTextForm from 'src/components/TagLineText/TagLineTextForm';

export const QUERY = gql`
  query EditTagLineTextById($id: Int!) {
    tagLineText: tagLineText(id: $id) {
      id
      text
      createdAt
    }
  }
`;
const UPDATE_TAG_LINE_TEXT_MUTATION = gql`
  mutation UpdateTagLineTextMutation(
    $id: Int!
    $input: UpdateTagLineTextInput!
  ) {
    updateTagLineText(id: $id, input: $input) {
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

export const Success = ({ tagLineText }) => {
  const [updateTagLineText, { loading, error }] = useMutation(
    UPDATE_TAG_LINE_TEXT_MUTATION,
    {
      onCompleted: () => {
        toast.success('TagLineText updated');
        navigate(routes.tagLineTexts());
      },
      onError: error => {
        toast.error(error.message);
      },
    }
  );

  const onSave = (input, id) => {
    updateTagLineText({ variables: { id, input } });
  };

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit TagLineText {tagLineText.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <TagLineTextForm
          tagLineText={tagLineText}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  );
};
