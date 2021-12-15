import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';
import { navigate, routes } from '@redwoodjs/router';

import InternationalSectionHeadingForm from 'src/components/InternationalSectionHeading/InternationalSectionHeadingForm';

export const QUERY = gql`
  query EditInternationalSectionHeadingById($id: Int!) {
    internationalSectionHeading: internationalSectionHeading(id: $id) {
      id
      text
      createdAt
    }
  }
`;
const UPDATE_INTERNATIONAL_SECTION_HEADING_MUTATION = gql`
  mutation UpdateInternationalSectionHeadingMutation(
    $id: Int!
    $input: UpdateInternationalSectionHeadingInput!
  ) {
    updateInternationalSectionHeading(id: $id, input: $input) {
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

export const Success = ({ internationalSectionHeading }) => {
  const [updateInternationalSectionHeading, { loading, error }] = useMutation(
    UPDATE_INTERNATIONAL_SECTION_HEADING_MUTATION,
    {
      onCompleted: () => {
        toast.success('InternationalSectionHeading updated');
        navigate(routes.internationalSectionHeadings());
      },
      onError: (error) => {
        toast.error(error.message);
      },
    }
  );

  const onSave = (input, id) => {
    updateInternationalSectionHeading({ variables: { id, input } });
  };

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit InternationalSectionHeading {internationalSectionHeading.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <InternationalSectionHeadingForm
          internationalSectionHeading={internationalSectionHeading}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  );
};
