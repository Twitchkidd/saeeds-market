import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';
import { navigate, routes } from '@redwoodjs/router';
import ProductsSectionHeaderTextForm from 'src/components/ProductsSectionHeaderText/ProductsSectionHeaderTextForm';

const CREATE_PRODUCTS_SECTION_HEADER_TEXT_MUTATION = gql`
  mutation CreateProductsSectionHeaderTextMutation(
    $input: CreateProductsSectionHeaderTextInput!
  ) {
    createProductsSectionHeaderText(input: $input) {
      id
    }
  }
`;

const NewProductsSectionHeaderText = () => {
  const [createProductsSectionHeaderText, { loading, error }] = useMutation(
    CREATE_PRODUCTS_SECTION_HEADER_TEXT_MUTATION,
    {
      onCompleted: () => {
        toast.success('ProductsSectionHeaderText created');
        navigate(routes.productsSectionHeaderTexts());
      },
      onError: error => {
        toast.error(error.message);
      },
    }
  );

  const onSave = input => {
    createProductsSectionHeaderText({ variables: { input } });
  };

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          New ProductsSectionHeaderText
        </h2>
      </header>
      <div className="rw-segment-main">
        <ProductsSectionHeaderTextForm
          onSave={onSave}
          loading={loading}
          error={error}
        />
      </div>
    </div>
  );
};

export default NewProductsSectionHeaderText;
