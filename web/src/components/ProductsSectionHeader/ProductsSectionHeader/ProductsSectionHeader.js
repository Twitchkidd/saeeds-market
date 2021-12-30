import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';
import { Link, routes, navigate } from '@redwoodjs/router';

const DELETE_PRODUCTS_SECTION_HEADER_MUTATION = gql`
  mutation DeleteProductsSectionHeaderMutation($id: Int!) {
    deleteProductsSectionHeader(id: $id) {
      id
    }
  }
`;

const jsonDisplay = obj => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  );
};

const timeTag = datetime => {
  return (
    <time dateTime={datetime} title={datetime}>
      {new Date(datetime).toUTCString()}
    </time>
  );
};

const checkboxInputTag = checked => {
  return <input type="checkbox" checked={checked} disabled />;
};

const ProductsSectionHeader = ({ productsSectionHeader }) => {
  const [deleteProductsSectionHeader] = useMutation(
    DELETE_PRODUCTS_SECTION_HEADER_MUTATION,
    {
      onCompleted: () => {
        toast.success('ProductsSectionHeader deleted');
        navigate(routes.productsSectionHeaders());
      },
      onError: error => {
        toast.error(error.message);
      },
    }
  );

  const onDeleteClick = id => {
    if (
      confirm(
        'Are you sure you want to delete productsSectionHeader ' + id + '?'
      )
    ) {
      deleteProductsSectionHeader({ variables: { id } });
    }
  };

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            ProductsSectionHeader {productsSectionHeader.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{productsSectionHeader.id}</td>
            </tr>
            <tr>
              <th>Text</th>
              <td>{productsSectionHeader.text}</td>
            </tr>
            <tr>
              <th>Image urls</th>
              <td>{productsSectionHeader.imageUrls}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(productsSectionHeader.createdAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editProductsSectionHeader({
            id: productsSectionHeader.id,
          })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(productsSectionHeader.id)}
        >
          Delete
        </button>
      </nav>
    </>
  );
};

export default ProductsSectionHeader;
