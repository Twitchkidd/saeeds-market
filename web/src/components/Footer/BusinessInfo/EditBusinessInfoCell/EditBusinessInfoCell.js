import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';
import { navigate, routes } from '@redwoodjs/router';

import BusinessInfoForm from 'src/components/Footer/BusinessInfo/BusinessInfoForm';

export const QUERY = gql`
  query EditBusinessInfoById($id: Int!) {
    businessInfo: businessInfo(id: $id) {
      id
      name
      address
      hours
      phone
      createdAt
    }
  }
`;
const UPDATE_BUSINESS_INFO_MUTATION = gql`
  mutation UpdateBusinessInfoMutation(
    $id: Int!
    $input: UpdateBusinessInfoInput!
  ) {
    updateBusinessInfo(id: $id, input: $input) {
      id
      name
      address
      hours
      phone
      createdAt
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
);

export const Success = ({ businessInfo }) => {
  const [updateBusinessInfo, { loading, error }] = useMutation(
    UPDATE_BUSINESS_INFO_MUTATION,
    {
      onCompleted: () => {
        toast.success('BusinessInfo updated');
        navigate(routes.businessInfos());
      },
      onError: (error) => {
        toast.error(error.message);
      },
    }
  );

  const onSave = (input, id) => {
    updateBusinessInfo({ variables: { id, input } });
  };

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit BusinessInfo {businessInfo.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <BusinessInfoForm
          businessInfo={businessInfo}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  );
};
