import { Link, routes } from '@redwoodjs/router';

import ProductsSectionHeaderTexts from 'src/components/ProductsSectionHeaderText/ProductsSectionHeaderTexts';

export const QUERY = gql`
  query FindProductsSectionHeaderTexts {
    productsSectionHeaderTexts {
      id
      text
      createdAt
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No productsSectionHeaderTexts yet. '}
      <Link to={routes.newProductsSectionHeaderText()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  );
};

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
);

export const Success = ({ productsSectionHeaderTexts }) => {
  return (
    <ProductsSectionHeaderTexts
      productsSectionHeaderTexts={productsSectionHeaderTexts}
    />
  );
};
