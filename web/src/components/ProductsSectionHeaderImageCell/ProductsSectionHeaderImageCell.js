import styled from 'styled-components';

const Image = styled.img``;

export const QUERY = gql`
  query FindProductsSectionHeaderImagesQuery {
    productsSectionHeaderImages {
      url
      description
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => <div>Empty</div>;

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
);

export const Success = ({ productsSectionHeaderImages }) => (
  <>
    {productsSectionHeaderImages.map((img, i) => (
      <Image src={img.url} key={i} alt={img.description} />
    ))}
  </>
);
