import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';
import { navigate, routes } from '@redwoodjs/router';

import InternationalSectionHeaderForm from 'src/components/InternationalSectionHeader/InternationalSectionHeaderForm';

export const QUERY = gql`
  query EditInternationalSectionHeaderById($id: Int!) {
    internationalSectionHeader: internationalSectionHeader(id: $id) {
      id
      text
      withFrom
      createdAt
    }
  }
`;
const UPDATE_INTERNATIONAL_SECTION_HEADER_MUTATION = gql`
  mutation UpdateInternationalSectionHeaderMutation(
    $id: Int!
    $input: UpdateInternationalSectionHeaderInput!
  ) {
    updateInternationalSectionHeader(id: $id, input: $input) {
      id
      text
      withFrom
      createdAt
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
);

export const Success = ({ internationalSectionHeader }) => {
  const [updateInternationalSectionHeader, { loading, error }] = useMutation(
    UPDATE_INTERNATIONAL_SECTION_HEADER_MUTATION,
    {
      onCompleted: () => {
        toast.success('InternationalSectionHeader updated');
        navigate(routes.internationalSectionHeaders());
      },
      onError: error => {
        toast.error(error.message);
      },
    }
  );

  const onSave = (input, id) => {
    updateInternationalSectionHeader({ variables: { id, input } });
  };

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit InternationalSectionHeader {internationalSectionHeader.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <InternationalSectionHeaderForm
          internationalSectionHeader={internationalSectionHeader}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  );
};
