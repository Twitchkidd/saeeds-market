import { Link, routes } from '@redwoodjs/router';

import ProductsSectionHeaderImages from 'src/components/ProductsSectionHeaderImage/ProductsSectionHeaderImages';

export const QUERY = gql`
  query FindProductsSectionHeaderImages {
    productsSectionHeaderImages {
      id
      url
      description
      createdAt
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No productsSectionHeaderImages yet. '}
      <Link to={routes.newProductsSectionHeaderImage()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  );
};

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
);

export const Success = ({ productsSectionHeaderImages }) => {
  return (
    <ProductsSectionHeaderImages
      productsSectionHeaderImages={productsSectionHeaderImages}
    />
  );
};
