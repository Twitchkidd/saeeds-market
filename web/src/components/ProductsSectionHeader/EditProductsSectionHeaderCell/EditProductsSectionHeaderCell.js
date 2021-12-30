import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';
import { navigate, routes } from '@redwoodjs/router';

import ProductsSectionHeaderForm from 'src/components/ProductsSectionHeader/ProductsSectionHeaderForm';

export const QUERY = gql`
  query EditProductsSectionHeaderById($id: Int!) {
    productsSectionHeader: productsSectionHeader(id: $id) {
      id
      text
      imageUrls
      createdAt
    }
  }
`;
const UPDATE_PRODUCTS_SECTION_HEADER_MUTATION = gql`
  mutation UpdateProductsSectionHeaderMutation(
    $id: Int!
    $input: UpdateProductsSectionHeaderInput!
  ) {
    updateProductsSectionHeader(id: $id, input: $input) {
      id
      text
      imageUrls
      createdAt
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
);

export const Success = ({ productsSectionHeader }) => {
  const [updateProductsSectionHeader, { loading, error }] = useMutation(
    UPDATE_PRODUCTS_SECTION_HEADER_MUTATION,
    {
      onCompleted: () => {
        toast.success('ProductsSectionHeader updated');
        navigate(routes.productsSectionHeaders());
      },
      onError: error => {
        toast.error(error.message);
      },
    }
  );

  const onSave = (input, id) => {
    updateProductsSectionHeader({ variables: { id, input } });
  };

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit ProductsSectionHeader {productsSectionHeader.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <ProductsSectionHeaderForm
          productsSectionHeader={productsSectionHeader}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  );
};
