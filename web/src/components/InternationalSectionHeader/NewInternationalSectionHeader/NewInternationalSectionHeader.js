import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';
import { navigate, routes } from '@redwoodjs/router';
import InternationalSectionHeaderForm from 'src/components/InternationalSectionHeader/InternationalSectionHeaderForm';

const CREATE_INTERNATIONAL_SECTION_HEADER_MUTATION = gql`
  mutation CreateInternationalSectionHeaderMutation(
    $input: CreateInternationalSectionHeaderInput!
  ) {
    createInternationalSectionHeader(input: $input) {
      id
    }
  }
`;

const NewInternationalSectionHeader = () => {
  const [createInternationalSectionHeader, { loading, error }] = useMutation(
    CREATE_INTERNATIONAL_SECTION_HEADER_MUTATION,
    {
      onCompleted: () => {
        toast.success('InternationalSectionHeader created');
        navigate(routes.internationalSectionHeaders());
      },
      onError: error => {
        toast.error(error.message);
      },
    }
  );

  const onSave = input => {
    createInternationalSectionHeader({ variables: { input } });
  };

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          New InternationalSectionHeader
        </h2>
      </header>
      <div className="rw-segment-main">
        <InternationalSectionHeaderForm
          onSave={onSave}
          loading={loading}
          error={error}
        />
      </div>
    </div>
  );
};

export default NewInternationalSectionHeader;
