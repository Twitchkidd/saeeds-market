import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';
import { navigate, routes } from '@redwoodjs/router';

import WeCarryTextForm from 'src/components/WeCarryText/WeCarryTextForm';

export const QUERY = gql`
  query EditWeCarryTextById($id: Int!) {
    weCarryText: weCarryText(id: $id) {
      id
      text
      createdAt
    }
  }
`;
const UPDATE_WE_CARRY_TEXT_MUTATION = gql`
  mutation UpdateWeCarryTextMutation(
    $id: Int!
    $input: UpdateWeCarryTextInput!
  ) {
    updateWeCarryText(id: $id, input: $input) {
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

export const Success = ({ weCarryText }) => {
  const [updateWeCarryText, { loading, error }] = useMutation(
    UPDATE_WE_CARRY_TEXT_MUTATION,
    {
      onCompleted: () => {
        toast.success('WeCarryText updated');
        navigate(routes.weCarryTexts());
      },
      onError: error => {
        toast.error(error.message);
      },
    }
  );

  const onSave = (input, id) => {
    updateWeCarryText({ variables: { id, input } });
  };

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit WeCarryText {weCarryText.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <WeCarryTextForm
          weCarryText={weCarryText}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  );
};
