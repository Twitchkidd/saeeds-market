import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';
import { Link, routes, navigate } from '@redwoodjs/router';

const DELETE_PRODUCTS_SECTION_HEADER_IMAGE_MUTATION = gql`
  mutation DeleteProductsSectionHeaderImageMutation($id: Int!) {
    deleteProductsSectionHeaderImage(id: $id) {
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

const ProductsSectionHeaderImage = ({ productsSectionHeaderImage }) => {
  const [deleteProductsSectionHeaderImage] = useMutation(
    DELETE_PRODUCTS_SECTION_HEADER_IMAGE_MUTATION,
    {
      onCompleted: () => {
        toast.success('ProductsSectionHeaderImage deleted');
        navigate(routes.productsSectionHeaderImages());
      },
      onError: (error) => {
        toast.error(error.message);
      },
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
            ProductsSectionHeaderImage {productsSectionHeaderImage.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{productsSectionHeaderImage.id}</td>
            </tr>
            <tr>
              <td>
                <a href={productsSectionHeaderImage.url} target="_blank">
                  <img
                    src={thumbnail(productsSectionHeaderImage.url)}
                    style={{ maxWidth: '50px' }}
                  />
                </a>
              </td>
            </tr>
            <tr>
              <th>Description</th>
              <td>{productsSectionHeaderImage.description}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(productsSectionHeaderImage.createdAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editProductsSectionHeaderImage({
            id: productsSectionHeaderImage.id,
          })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(productsSectionHeaderImage.id)}
        >
          Delete
        </button>
      </nav>
    </>
  );
};

export default ProductsSectionHeaderImage;
