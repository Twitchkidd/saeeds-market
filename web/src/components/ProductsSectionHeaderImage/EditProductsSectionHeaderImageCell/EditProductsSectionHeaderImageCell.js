import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';
import { navigate, routes } from '@redwoodjs/router';

import ProductsSectionHeaderImageForm from 'src/components/ProductsSectionHeaderImage/ProductsSectionHeaderImageForm';

export const QUERY = gql`
  query EditProductsSectionHeaderImageById($id: Int!) {
    productsSectionHeaderImage: productsSectionHeaderImage(id: $id) {
      id
      url
      description
      createdAt
    }
  }
`;
const UPDATE_PRODUCTS_SECTION_HEADER_IMAGE_MUTATION = gql`
  mutation UpdateProductsSectionHeaderImageMutation(
    $id: Int!
    $input: UpdateProductsSectionHeaderImageInput!
  ) {
    updateProductsSectionHeaderImage(id: $id, input: $input) {
      id
      url
      description
      createdAt
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
);

export const Success = ({ productsSectionHeaderImage }) => {
  const [updateProductsSectionHeaderImage, { loading, error }] = useMutation(
    UPDATE_PRODUCTS_SECTION_HEADER_IMAGE_MUTATION,
    {
      onCompleted: () => {
        toast.success('ProductsSectionHeaderImage updated');
        navigate(routes.productsSectionHeaderImages());
      },
      onError: error => {
        toast.error(error.message);
      },
    }
  );

  const onSave = (input, id) => {
    updateProductsSectionHeaderImage({ variables: { id, input } });
  };

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit ProductsSectionHeaderImage {productsSectionHeaderImage.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <ProductsSectionHeaderImageForm
          productsSectionHeaderImage={productsSectionHeaderImage}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  );
};
