import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';
import { Link, routes } from '@redwoodjs/router';

import { QUERY } from 'src/components/ProductsSectionHeaderImage/ProductsSectionHeaderImagesCell';

const DELETE_PRODUCTS_SECTION_HEADER_IMAGE_MUTATION = gql`
  mutation DeleteProductsSectionHeaderImageMutation($id: Int!) {
    deleteProductsSectionHeaderImage(id: $id) {
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

const thumbnail = (url) => {
  const parts = url.split('/');
  parts.splice(3, 0, 'resize=width:100');
  return parts.join('/');
};

const ProductsSectionHeaderImagesList = ({ productsSectionHeaderImages }) => {
  const [deleteProductsSectionHeaderImage] = useMutation(
    DELETE_PRODUCTS_SECTION_HEADER_IMAGE_MUTATION,
    {
      onCompleted: () => {
        toast.success('ProductsSectionHeaderImage deleted');
      },
      onError: (error) => {
        toast.error(error.message);
      },
      // This refetches the query on the list page. Read more about other ways to
      // update the cache over here:
      // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
      refetchQueries: [{ query: QUERY }],
      awaitRefetchQueries: true,
    }
  );

  const onDeleteClick = (id) => {
    if (
      confirm(
        'Are you sure you want to delete productsSectionHeaderImage ' + id + '?'
      )
    ) {
      deleteProductsSectionHeaderImage({ variables: { id } });
    }
  };

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Url</th>
            <th>Description</th>
            <th>Created at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {productsSectionHeaderImages.map((productsSectionHeaderImage) => (
            <tr key={productsSectionHeaderImage.id}>
              <td>{truncate(productsSectionHeaderImage.id)}</td>
              <td>
                <a href={productsSectionHeaderImage.url} target="_blank">
                  <img
                    src={thumbnail(productsSectionHeaderImage.url)}
                    style={{ maxWidth: '50px' }}
                  />
                </a>
              </td>
              <td>{truncate(productsSectionHeaderImage.description)}</td>
              <td>{timeTag(productsSectionHeaderImage.createdAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.productsSectionHeaderImage({
                      id: productsSectionHeaderImage.id,
                    })}
                    title={
                      'Show productsSectionHeaderImage ' +
                      productsSectionHeaderImage.id +
                      ' detail'
                    }
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editProductsSectionHeaderImage({
                      id: productsSectionHeaderImage.id,
                    })}
                    title={
                      'Edit productsSectionHeaderImage ' +
                      productsSectionHeaderImage.id
                    }
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={
                      'Delete productsSectionHeaderImage ' +
                      productsSectionHeaderImage.id
                    }
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(productsSectionHeaderImage.id)}
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

export default ProductsSectionHeaderImagesList;
