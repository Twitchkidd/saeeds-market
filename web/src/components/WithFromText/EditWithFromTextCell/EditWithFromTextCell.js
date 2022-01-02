import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';
import { navigate, routes } from '@redwoodjs/router';

import WithFromTextForm from 'src/components/WithFromText/WithFromTextForm';

export const QUERY = gql`
  query EditWithFromTextById($id: Int!) {
    withFromText: withFromText(id: $id) {
      id
      text
      createdAt
    }
  }
`;
const UPDATE_WITH_FROM_TEXT_MUTATION = gql`
  mutation UpdateWithFromTextMutation(
    $id: Int!
    $input: UpdateWithFromTextInput!
  ) {
    updateWithFromText(id: $id, input: $input) {
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

export const Success = ({ withFromText }) => {
  const [updateWithFromText, { loading, error }] = useMutation(
    UPDATE_WITH_FROM_TEXT_MUTATION,
    {
      onCompleted: () => {
        toast.success('WithFromText updated');
        navigate(routes.withFromTexts());
      },
      onError: error => {
        toast.error(error.message);
      },
    }
  );

  const onSave = (input, id) => {
    updateWithFromText({ variables: { id, input } });
  };

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit WithFromText {withFromText.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <WithFromTextForm
          withFromText={withFromText}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  );
};
