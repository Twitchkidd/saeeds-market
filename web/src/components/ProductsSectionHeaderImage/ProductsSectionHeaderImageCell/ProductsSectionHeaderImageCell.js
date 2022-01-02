import ProductsSectionHeaderImage from 'src/components/ProductsSectionHeaderImage/ProductsSectionHeaderImage';

export const QUERY = gql`
  query FindProductsSectionHeaderImageById($id: Int!) {
    productsSectionHeaderImage: productsSectionHeaderImage(id: $id) {
      id
      url
      description
      createdAt
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => <div>ProductsSectionHeaderImage not found</div>;

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
);

export const Success = ({ productsSectionHeaderImage }) => {
  return (
    <ProductsSectionHeaderImage
      productsSectionHeaderImage={productsSectionHeaderImage}
    />
  );
};
