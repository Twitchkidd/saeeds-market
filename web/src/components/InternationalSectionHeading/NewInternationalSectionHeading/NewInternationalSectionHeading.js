import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';
import { navigate, routes } from '@redwoodjs/router';
import InternationalSectionHeadingForm from 'src/components/InternationalSectionHeading/InternationalSectionHeadingForm';

const CREATE_INTERNATIONAL_SECTION_HEADING_MUTATION = gql`
  mutation CreateInternationalSectionHeadingMutation(
    $input: CreateInternationalSectionHeadingInput!
  ) {
    createInternationalSectionHeading(input: $input) {
      id
    }
  }
`;

const NewInternationalSectionHeading = () => {
  const [createInternationalSectionHeading, { loading, error }] = useMutation(
    CREATE_INTERNATIONAL_SECTION_HEADING_MUTATION,
    {
      onCompleted: () => {
        toast.success('InternationalSectionHeading created');
        navigate(routes.internationalSectionHeadings());
      },
      onError: (error) => {
        toast.error(error.message);
      },
    }
  );

  const onSave = (input) => {
    createInternationalSectionHeading({ variables: { input } });
  };

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          New InternationalSectionHeading
        </h2>
      </header>
      <div className="rw-segment-main">
        <InternationalSectionHeadingForm
          onSave={onSave}
          loading={loading}
          error={error}
        />
      </div>
    </div>
  );
};

export default NewInternationalSectionHeading;
