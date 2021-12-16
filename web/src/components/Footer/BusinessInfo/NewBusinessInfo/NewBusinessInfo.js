import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';
import { navigate, routes } from '@redwoodjs/router';
import BusinessInfoForm from 'src/components/Footer/BusinessInfo/BusinessInfoForm';

const CREATE_BUSINESS_INFO_MUTATION = gql`
  mutation CreateBusinessInfoMutation($input: CreateBusinessInfoInput!) {
    createBusinessInfo(input: $input) {
      id
    }
  }
`;

const NewBusinessInfo = () => {
  const [createBusinessInfo, { loading, error }] = useMutation(
    CREATE_BUSINESS_INFO_MUTATION,
    {
      onCompleted: () => {
        toast.success('BusinessInfo created');
        navigate(routes.businessInfos());
      },
      onError: (error) => {
        toast.error(error.message);
      },
    }
  );

  const onSave = (input) => {
    createBusinessInfo({ variables: { input } });
  };

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New BusinessInfo</h2>
      </header>
      <div className="rw-segment-main">
        <BusinessInfoForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  );
};

export default NewBusinessInfo;
