import SectionHeader from 'src/components/SectionHeader/SectionHeader';

export const QUERY = gql`
  query FindProductsSectionHeaderTextsQuery {
    productsSectionHeaderTexts {
      text
    }
  }
`;

export const Loading = () => <SectionHeader>Loading...</SectionHeader>;

export const Empty = () => <SectionHeader>Empty</SectionHeader>;

export const Failure = ({ error }) => (
  <SectionHeader style={{ color: 'red' }}>Error: {error.message}</SectionHeader>
);

export const Success = ({ productSectionHeaderTexts }) => (
  <SectionHeader>{productSectionHeaderTexts[0].text}</SectionHeader>
);
