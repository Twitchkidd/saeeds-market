import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';
import { navigate, routes } from '@redwoodjs/router';
import InternationalSectionHeaderTextForm from 'src/components/InternationalSectionHeaderText/InternationalSectionHeaderTextForm';

const CREATE_INTERNATIONAL_SECTION_HEADER_TEXT_MUTATION = gql`
  mutation CreateInternationalSectionHeaderTextMutation(
    $input: CreateInternationalSectionHeaderTextInput!
  ) {
    createInternationalSectionHeaderText(input: $input) {
      id
    }
  }
`;

const NewInternationalSectionHeaderText = () => {
  const [createInternationalSectionHeaderText, { loading, error }] =
    useMutation(CREATE_INTERNATIONAL_SECTION_HEADER_TEXT_MUTATION, {
      onCompleted: () => {
        toast.success('InternationalSectionHeaderText created');
        navigate(routes.internationalSectionHeaderTexts());
      },
      onError: error => {
        toast.error(error.message);
      },
    });

  const onSave = input => {
    createInternationalSectionHeaderText({ variables: { input } });
  };

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          New InternationalSectionHeaderText
        </h2>
      </header>
      <div className="rw-segment-main">
        <InternationalSectionHeaderTextForm
          onSave={onSave}
          loading={loading}
          error={error}
        />
      </div>
    </div>
  );
};

export default NewInternationalSectionHeaderText;
