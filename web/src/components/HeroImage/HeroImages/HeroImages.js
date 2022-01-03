import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';
import { Link, routes } from '@redwoodjs/router';

import { QUERY } from 'src/components/HeroImage/HeroImagesCell';

const DELETE_HERO_IMAGE_MUTATION = gql`
  mutation DeleteHeroImageMutation($id: Int!) {
    deleteHeroImage(id: $id) {
      id
    }
  }
`;

const MAX_STRING_LENGTH = 150;

const truncate = (text) => {
  let output = text;
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...';
  }
  return output;
};

const jsonTruncate = (obj) => {
  return truncate(JSON.stringify(obj, null, 2));
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

const HeroImagesList = ({ heroImages }) => {
  const [deleteHeroImage] = useMutation(DELETE_HERO_IMAGE_MUTATION, {
    onCompleted: () => {
      toast.success('HeroImage deleted');
    },
    onError: (error) => {
      toast.error(error.message);
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
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
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Url</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {heroImages.map((heroImage) => (
            <tr key={heroImage.id}>
              <td>{truncate(heroImage.id)}</td>
              <td>{truncate(heroImage.title)}</td>
              <td>
                <a href={image.url} target="_blank">
                  <img
                    src={thumbnail(image.url)}
                    style={{ maxWidth: '50px' }}
                  />
                </a>
              </td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.heroImage({ id: heroImage.id })}
                    title={'Show heroImage ' + heroImage.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editHeroImage({ id: heroImage.id })}
                    title={'Edit heroImage ' + heroImage.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete heroImage ' + heroImage.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(heroImage.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HeroImagesList;
