import { Link, routes } from '@redwoodjs/router';

import ProductTypes from 'src/components/ProductType/ProductTypes';

export const QUERY = gql`
  query FindProductTypes {
    productTypes {
      id
      name
      important
      imageUrl
      createdAt
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No productTypes yet. '}
      <Link to={routes.newProductType()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  );
};

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
);

export const Success = ({ productTypes }) => {
  return <ProductTypes productTypes={productTypes} />;
};
