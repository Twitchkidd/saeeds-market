import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';
import { navigate, routes } from '@redwoodjs/router';

import WhatsNewHeaderForm from 'src/components/WhatsNewHeader/WhatsNewHeaderForm';

export const QUERY = gql`
  query EditWhatsNewHeaderById($id: Int!) {
    whatsNewHeader: whatsNewHeader(id: $id) {
      id
      text
      createdAt
    }
  }
`;
const UPDATE_WHATS_NEW_HEADER_MUTATION = gql`
  mutation UpdateWhatsNewHeaderMutation(
    $id: Int!
    $input: UpdateWhatsNewHeaderInput!
  ) {
    updateWhatsNewHeader(id: $id, input: $input) {
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

export const Success = ({ whatsNewHeader }) => {
  const [updateWhatsNewHeader, { loading, error }] = useMutation(
    UPDATE_WHATS_NEW_HEADER_MUTATION,
    {
      onCompleted: () => {
        toast.success('WhatsNewHeader updated');
        navigate(routes.whatsNewHeaders());
      },
      onError: (error) => {
        toast.error(error.message);
      },
    }
  );

  const onSave = (input, id) => {
    updateWhatsNewHeader({ variables: { id, input } });
  };

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit WhatsNewHeader {whatsNewHeader.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <WhatsNewHeaderForm
          whatsNewHeader={whatsNewHeader}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  );
};
