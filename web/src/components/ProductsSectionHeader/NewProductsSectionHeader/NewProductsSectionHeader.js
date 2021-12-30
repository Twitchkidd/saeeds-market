import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';
import { navigate, routes } from '@redwoodjs/router';
import ProductsSectionHeaderForm from 'src/components/ProductsSectionHeader/ProductsSectionHeaderForm';

const CREATE_PRODUCTS_SECTION_HEADER_MUTATION = gql`
  mutation CreateProductsSectionHeaderMutation(
    $input: CreateProductsSectionHeaderInput!
  ) {
    createProductsSectionHeader(input: $input) {
      id
    }
  }
`;

const NewProductsSectionHeader = () => {
  const [createProductsSectionHeader, { loading, error }] = useMutation(
    CREATE_PRODUCTS_SECTION_HEADER_MUTATION,
    {
      onCompleted: () => {
        toast.success('ProductsSectionHeader created');
        navigate(routes.productsSectionHeaders());
      },
      onError: error => {
        toast.error(error.message);
      },
    }
  );

  const onSave = input => {
    createProductsSectionHeader({ variables: { input } });
  };

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          New ProductsSectionHeader
        </h2>
      </header>
      <div className="rw-segment-main">
        <ProductsSectionHeaderForm
          onSave={onSave}
          loading={loading}
          error={error}
        />
      </div>
    </div>
  );
};

export default NewProductsSectionHeader;
