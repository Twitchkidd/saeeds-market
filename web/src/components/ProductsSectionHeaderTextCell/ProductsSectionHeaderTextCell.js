export const QUERY = gql`
  query FindProductsSectionHeaderTextsQuery {
    productsSectionHeaderTexts {
      text
    }
  }
`;

export const Loading = () => 'Specialty Items';

export const Empty = () => <div>Empty</div>;

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
);

export const Success = ({ productsSectionHeaderTexts }) =>
  productsSectionHeaderTexts[0].text;
