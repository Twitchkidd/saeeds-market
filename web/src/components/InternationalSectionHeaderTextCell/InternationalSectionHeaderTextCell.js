import SectionHeader from 'src/components/SectionHeader/SectionHeader';

export const QUERY = gql`
  query FindInternationalSectionHeaderTextsQuery {
    internationalSectionHeaderTexts {
      text
    }
  }
`;

export const Loading = () => <SectionHeader>Loading...</SectionHeader>;

export const Empty = () => <SectionHeader>Empty</SectionHeader>;

export const Failure = ({ error }) => (
  <SectionHeader style={{ color: 'red' }}>Error: {error.message}</SectionHeader>
);

export const Success = ({ internationalSectionHeaderTexts }) => (
  <SectionHeader>{internationalSectionHeaderTexts[0].text}</SectionHeader>
);
