import styled from 'styled-components';
import SectionHeader from 'src/components/SectionHeader/SectionHeader';
import DisplayText from 'src/components/DisplayText/DisplayText';

const Image = styled.img``;

export const QUERY = gql`
  query FindInternationalSectionHeadersQuery {
    productsSectionHeaders {
      text
      imageUrls
      imageDescriptions
      weCarry
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => <div>Empty</div>;

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
);

export const Success = ({ productSectionHeaders }) => (
  <>
    <SectionHeader>{productSectionHeaders[0].text}</SectionHeader>
    {productSectionHeaders[0].imageUrls.map((url, i) => (
      <Image
        src={url}
        key={i}
        alt={productSectionHeaders[0].imageDescriptions[i]}
      />
    ))}
    <DisplayText>{productSectionHeaders[0].weCarry}</DisplayText>
  </>
);
