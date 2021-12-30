import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';
import { navigate, routes } from '@redwoodjs/router';
import ProductTypeForm from 'src/components/ProductType/ProductTypeForm';

const CREATE_PRODUCT_TYPE_MUTATION = gql`
  mutation CreateProductTypeMutation($input: CreateProductTypeInput!) {
    createProductType(input: $input) {
      id
    }
  }
`;

const NewProductType = () => {
  const [createProductType, { loading, error }] = useMutation(
    CREATE_PRODUCT_TYPE_MUTATION,
    {
      onCompleted: () => {
        toast.success('ProductType created');
        navigate(routes.productTypes());
      },
      onError: error => {
        toast.error(error.message);
      },
    }
  );

  const onSave = input => {
    createProductType({ variables: { input } });
  };

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New ProductType</h2>
      </header>
      <div className="rw-segment-main">
        <ProductTypeForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  );
};

export default NewProductType;
