import ProductsSectionHeaderText from 'src/components/ProductsSectionHeaderText/ProductsSectionHeaderText';

export const QUERY = gql`
  query FindProductsSectionHeaderTextById($id: Int!) {
    productsSectionHeaderText: productsSectionHeaderText(id: $id) {
      id
      text
      createdAt
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => <div>ProductsSectionHeaderText not found</div>;

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
);

export const Success = ({ productsSectionHeaderText }) => {
  return (
    <ProductsSectionHeaderText
      productsSectionHeaderText={productsSectionHeaderText}
    />
  );
};
