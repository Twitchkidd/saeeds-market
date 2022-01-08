import styled from 'styled-components';
// import Falafel_Sandwich2 from '../../../../../assets-saeeds/photos/Falafel_Sandwich2.jpg';
// import Sweet_Pepper_and_Z_Atar_Pie2 from '../../../../../assets-saeeds/photos/Sweet_Pepper_and_Z_Atar_Pie2.jpg';
// import Kihi_Swirl_Pie from '../../../../../assets-saeeds/photos/Kihi_Swirl_Pie.jpg';
// import Grape_Leaves2 from '../../../../../assets-saeeds/photos/Grape_Leaves2.jpg';

// const localImages = [
//   Falafel_Sandwich2,
//   Sweet_Pepper_and_Z_Atar_Pie2,
//   Kihi_Swirl_Pie,
//   Grape_Leaves2,
// ];

const thumbnail = (url) => {
  const parts = url.split('/');
  parts.splice(3, 0, 'resize=width:640');
  return parts.join('/');
};

const Image = styled.img`
  width: 100%;
`;

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
      <Image src={thumbnail(img.url)} key={i} alt={img.description} />
    ))}
    {/* {localImages.map((img, i) => (
      <Image src={img} key={i} alt="{photos/img.description}" />
    ))} */}
  </>
);
