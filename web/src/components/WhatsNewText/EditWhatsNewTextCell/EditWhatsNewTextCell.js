import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';
import { navigate, routes } from '@redwoodjs/router';

import WhatsNewTextForm from 'src/components/WhatsNewText/WhatsNewTextForm';

export const QUERY = gql`
  query EditWhatsNewTextById($id: Int!) {
    whatsNewText: whatsNewText(id: $id) {
      id
      text
      createdAt
    }
  }
`;
const UPDATE_WHATS_NEW_TEXT_MUTATION = gql`
  mutation UpdateWhatsNewTextMutation(
    $id: Int!
    $input: UpdateWhatsNewTextInput!
  ) {
    updateWhatsNewText(id: $id, input: $input) {
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

export const Success = ({ whatsNewText }) => {
  const [updateWhatsNewText, { loading, error }] = useMutation(
    UPDATE_WHATS_NEW_TEXT_MUTATION,
    {
      onCompleted: () => {
        toast.success('WhatsNewText updated');
        navigate(routes.whatsNewTexts());
      },
      onError: error => {
        toast.error(error.message);
      },
    }
  );

  const onSave = (input, id) => {
    updateWhatsNewText({ variables: { id, input } });
  };

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit WhatsNewText {whatsNewText.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <WhatsNewTextForm
          whatsNewText={whatsNewText}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  );
};
