import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';
import { Link, routes, navigate } from '@redwoodjs/router';

const DELETE_HERO_IMAGE_MUTATION = gql`
  mutation DeleteHeroImageMutation($id: Int!) {
    deleteHeroImage(id: $id) {
      id
    }
  }
`;

const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  );
};

const timeTag = (datetime) => {
  return (
    <time dateTime={datetime} title={datetime}>
      {new Date(datetime).toUTCString()}
    </time>
  );
};

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />;
};

const HeroImage = ({ heroImage }) => {
  const [deleteHeroImage] = useMutation(DELETE_HERO_IMAGE_MUTATION, {
    onCompleted: () => {
      toast.success('HeroImage deleted');
      navigate(routes.heroImages());
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete heroImage ' + id + '?')) {
      deleteHeroImage({ variables: { id } });
    }
  };

  const thumbnail = (url) => {
    const parts = url.split('/');
    parts.splice(3, 0, 'resize=width:100');
    return parts.join('/');
  };

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            HeroImage {heroImage.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{heroImage.id}</td>
            </tr>
            <tr>
              <th>Title</th>
              <td>{heroImage.title}</td>
            </tr>
            <tr>
              <a href={image.url} target="_blank">
                <img src={thumbnail(image.url)} style={{ maxWidth: '50px' }} />
              </a>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editHeroImage({ id: heroImage.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(heroImage.id)}
        >
          Delete
        </button>
      </nav>
    </>
  );
};

export default HeroImage;
