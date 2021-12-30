import { Link, routes } from '@redwoodjs/router';

import ProductsSectionHeaders from 'src/components/ProductsSectionHeader/ProductsSectionHeaders';

export const QUERY = gql`
  query FindProductsSectionHeaders {
    productsSectionHeaders {
      id
      text
      imageUrls
      createdAt
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No productsSectionHeaders yet. '}
      <Link to={routes.newProductsSectionHeader()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  );
};

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
);

export const Success = ({ productsSectionHeaders }) => {
  return (
    <ProductsSectionHeaders productsSectionHeaders={productsSectionHeaders} />
  );
};
