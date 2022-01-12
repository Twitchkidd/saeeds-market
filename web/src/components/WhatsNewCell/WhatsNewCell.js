import Pepper_Pie from '../../../../../assets-saeeds/photos/Pepper_Pie.jpg';
import Spanikopita from '../../../../../assets-saeeds/photos/Spanikopita.jpg';
import Greek_Salad from '../../../../../assets-saeeds/photos/Greek_Salad.jpg';

const localImages = [Pepper_Pie, Spanikopita, Greek_Salad];

const thumbnail = (url) => {
  const parts = url.split('/');
  parts.splice(3, 0, 'resize=width:640');
  return parts.join('/');
};

export const QUERY = gql`
  query FindWhatsNewQuery {
    newItems {
      title
      description
      imageUrl
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => <div>Empty</div>;

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
);

export const Success = ({ newItems }) => {
  return newItems.map((item, i) => (
    <div key={i}>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      {/* <img
        src={thumbnail(item.imageUrl)}
        alt={item.title}
        style={{ width: '100%' }}
      /> */}
      <img src={localImages[i]} alt={item.title} style={{ width: '100%' }} />
    </div>
  ));
};
