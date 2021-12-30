import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';
import { navigate, routes } from '@redwoodjs/router';

import ProductTypeForm from 'src/components/ProductType/ProductTypeForm';

export const QUERY = gql`
  query EditProductTypeById($id: Int!) {
    productType: productType(id: $id) {
      id
      name
      important
      imageUrl
      createdAt
    }
  }
`;
const UPDATE_PRODUCT_TYPE_MUTATION = gql`
  mutation UpdateProductTypeMutation(
    $id: Int!
    $input: UpdateProductTypeInput!
  ) {
    updateProductType(id: $id, input: $input) {
      id
      name
      important
      imageUrl
      createdAt
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
);

export const Success = ({ productType }) => {
  const [updateProductType, { loading, error }] = useMutation(
    UPDATE_PRODUCT_TYPE_MUTATION,
    {
      onCompleted: () => {
        toast.success('ProductType updated');
        navigate(routes.productTypes());
      },
      onError: error => {
        toast.error(error.message);
      },
    }
  );

  const onSave = (input, id) => {
    updateProductType({ variables: { id, input } });
  };

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit ProductType {productType.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <ProductTypeForm
          productType={productType}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  );
};
