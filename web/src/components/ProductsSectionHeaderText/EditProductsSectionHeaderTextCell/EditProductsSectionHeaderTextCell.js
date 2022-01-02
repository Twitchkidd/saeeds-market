import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';
import { navigate, routes } from '@redwoodjs/router';

import ProductsSectionHeaderTextForm from 'src/components/ProductsSectionHeaderText/ProductsSectionHeaderTextForm';

export const QUERY = gql`
  query EditProductsSectionHeaderTextById($id: Int!) {
    productsSectionHeaderText: productsSectionHeaderText(id: $id) {
      id
      text
      createdAt
    }
  }
`;
const UPDATE_PRODUCTS_SECTION_HEADER_TEXT_MUTATION = gql`
  mutation UpdateProductsSectionHeaderTextMutation(
    $id: Int!
    $input: UpdateProductsSectionHeaderTextInput!
  ) {
    updateProductsSectionHeaderText(id: $id, input: $input) {
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

export const Success = ({ productsSectionHeaderText }) => {
  const [updateProductsSectionHeaderText, { loading, error }] = useMutation(
    UPDATE_PRODUCTS_SECTION_HEADER_TEXT_MUTATION,
    {
      onCompleted: () => {
        toast.success('ProductsSectionHeaderText updated');
        navigate(routes.productsSectionHeaderTexts());
      },
      onError: error => {
        toast.error(error.message);
      },
    }
  );

  const onSave = (input, id) => {
    updateProductsSectionHeaderText({ variables: { id, input } });
  };

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit ProductsSectionHeaderText {productsSectionHeaderText.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <ProductsSectionHeaderTextForm
          productsSectionHeaderText={productsSectionHeaderText}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  );
};
