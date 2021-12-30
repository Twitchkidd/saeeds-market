import ProductType from 'src/components/ProductType/ProductType';

export const QUERY = gql`
  query FindProductTypeById($id: Int!) {
    productType: productType(id: $id) {
      id
      name
      important
      imageUrl
      createdAt
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => <div>ProductType not found</div>;

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
);

export const Success = ({ productType }) => {
  return <ProductType productType={productType} />;
};
