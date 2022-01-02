import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';
import { navigate, routes } from '@redwoodjs/router';
import ProductsSectionHeaderImageForm from 'src/components/ProductsSectionHeaderImage/ProductsSectionHeaderImageForm';

const CREATE_PRODUCTS_SECTION_HEADER_IMAGE_MUTATION = gql`
  mutation CreateProductsSectionHeaderImageMutation(
    $input: CreateProductsSectionHeaderImageInput!
  ) {
    createProductsSectionHeaderImage(input: $input) {
      id
    }
  }
`;

const NewProductsSectionHeaderImage = () => {
  const [createProductsSectionHeaderImage, { loading, error }] = useMutation(
    CREATE_PRODUCTS_SECTION_HEADER_IMAGE_MUTATION,
    {
      onCompleted: () => {
        toast.success('ProductsSectionHeaderImage created');
        navigate(routes.productsSectionHeaderImages());
      },
      onError: error => {
        toast.error(error.message);
      },
    }
  );

  const onSave = input => {
    createProductsSectionHeaderImage({ variables: { input } });
  };

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          New ProductsSectionHeaderImage
        </h2>
      </header>
      <div className="rw-segment-main">
        <ProductsSectionHeaderImageForm
          onSave={onSave}
          loading={loading}
          error={error}
        />
      </div>
    </div>
  );
};

export default NewProductsSectionHeaderImage;
