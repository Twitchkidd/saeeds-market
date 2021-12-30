import SectionHeader from 'src/components/SectionHeader/SectionHeader';
import DisplayText from 'src/components/DisplayText/DisplayText';

export const QUERY = gql`
  query FindInternationalSectionHeadersQuery {
    internationalSectionHeaders {
      text
      withFrom
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => <div>Empty</div>;

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
);

export const Success = ({ internationalSectionHeaders }) => (
  <>
    <SectionHeader>{internationalSectionHeaders[0].text}</SectionHeader>
    <DisplayText>{internationalSectionHeaders[0].withFrom}</DisplayText>
  </>
);
