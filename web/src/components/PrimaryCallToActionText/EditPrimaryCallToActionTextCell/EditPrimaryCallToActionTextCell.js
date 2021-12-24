import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';
import { navigate, routes } from '@redwoodjs/router';

import PrimaryCallToActionTextForm from 'src/components/PrimaryCallToActionText/PrimaryCallToActionTextForm';

export const QUERY = gql`
  query EditPrimaryCallToActionTextById($id: Int!) {
    primaryCallToActionText: primaryCallToActionText(id: $id) {
      id
      text
      createdAt
    }
  }
`;
const UPDATE_PRIMARY_CALL_TO_ACTION_TEXT_MUTATION = gql`
  mutation UpdatePrimaryCallToActionTextMutation(
    $id: Int!
    $input: UpdatePrimaryCallToActionTextInput!
  ) {
    updatePrimaryCallToActionText(id: $id, input: $input) {
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

export const Success = ({ primaryCallToActionText }) => {
  const [updatePrimaryCallToActionText, { loading, error }] = useMutation(
    UPDATE_PRIMARY_CALL_TO_ACTION_TEXT_MUTATION,
    {
      onCompleted: () => {
        toast.success('PrimaryCallToActionText updated');
        navigate(routes.primaryCallToActionTexts());
      },
      onError: error => {
        toast.error(error.message);
      },
    }
  );

  const onSave = (input, id) => {
    updatePrimaryCallToActionText({ variables: { id, input } });
  };

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit PrimaryCallToActionText {primaryCallToActionText.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <PrimaryCallToActionTextForm
          primaryCallToActionText={primaryCallToActionText}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  );
};
