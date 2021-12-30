import ProductsSectionHeader from 'src/components/ProductsSectionHeader/ProductsSectionHeader';

export const QUERY = gql`
  query FindProductsSectionHeaderById($id: Int!) {
    productsSectionHeader: productsSectionHeader(id: $id) {
      id
      text
      imageUrls
      createdAt
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => <div>ProductsSectionHeader not found</div>;

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
);

export const Success = ({ productsSectionHeader }) => {
  return (
    <ProductsSectionHeader productsSectionHeader={productsSectionHeader} />
  );
};
