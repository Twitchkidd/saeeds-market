import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';
import { Link, routes, navigate } from '@redwoodjs/router';

const DELETE_PRODUCT_TYPE_MUTATION = gql`
  mutation DeleteProductTypeMutation($id: Int!) {
    deleteProductType(id: $id) {
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

const ProductType = ({ productType }) => {
  const [deleteProductType] = useMutation(DELETE_PRODUCT_TYPE_MUTATION, {
    onCompleted: () => {
      toast.success('ProductType deleted');
      navigate(routes.productTypes());
    },
    onError: error => {
      toast.error(error.message);
    },
  });

  const onDeleteClick = id => {
    if (confirm('Are you sure you want to delete productType ' + id + '?')) {
      deleteProductType({ variables: { id } });
    }
  };

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            ProductType {productType.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{productType.id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{productType.name}</td>
            </tr>
            <tr>
              <th>Important</th>
              <td>{checkboxInputTag(productType.important)}</td>
            </tr>
            <tr>
              <th>Image url</th>
              <td>{productType.imageUrl}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(productType.createdAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editProductType({ id: productType.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(productType.id)}
        >
          Delete
        </button>
      </nav>
    </>
  );
};

export default ProductType;
