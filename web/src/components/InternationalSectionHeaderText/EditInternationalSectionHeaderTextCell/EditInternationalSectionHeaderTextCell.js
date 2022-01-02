import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';
import { navigate, routes } from '@redwoodjs/router';

import InternationalSectionHeaderTextForm from 'src/components/InternationalSectionHeaderText/InternationalSectionHeaderTextForm';

export const QUERY = gql`
  query EditInternationalSectionHeaderTextById($id: Int!) {
    internationalSectionHeaderText: internationalSectionHeaderText(id: $id) {
      id
      text
      createdAt
    }
  }
`;
const UPDATE_INTERNATIONAL_SECTION_HEADER_TEXT_MUTATION = gql`
  mutation UpdateInternationalSectionHeaderTextMutation(
    $id: Int!
    $input: UpdateInternationalSectionHeaderTextInput!
  ) {
    updateInternationalSectionHeaderText(id: $id, input: $input) {
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

export const Success = ({ internationalSectionHeaderText }) => {
  const [updateInternationalSectionHeaderText, { loading, error }] =
    useMutation(UPDATE_INTERNATIONAL_SECTION_HEADER_TEXT_MUTATION, {
      onCompleted: () => {
        toast.success('InternationalSectionHeaderText updated');
        navigate(routes.internationalSectionHeaderTexts());
      },
      onError: error => {
        toast.error(error.message);
      },
    });

  const onSave = (input, id) => {
    updateInternationalSectionHeaderText({ variables: { id, input } });
  };

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit InternationalSectionHeaderText{' '}
          {internationalSectionHeaderText.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <InternationalSectionHeaderTextForm
          internationalSectionHeaderText={internationalSectionHeaderText}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  );
};
