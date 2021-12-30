import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';
import { Link, routes } from '@redwoodjs/router';

import { QUERY } from 'src/components/ProductType/ProductTypesCell';

const DELETE_PRODUCT_TYPE_MUTATION = gql`
  mutation DeleteProductTypeMutation($id: Int!) {
    deleteProductType(id: $id) {
      id
    }
  }
`;

const MAX_STRING_LENGTH = 150;

const truncate = text => {
  let output = text;
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...';
  }
  return output;
};

const jsonTruncate = obj => {
  return truncate(JSON.stringify(obj, null, 2));
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

const ProductTypesList = ({ productTypes }) => {
  const [deleteProductType] = useMutation(DELETE_PRODUCT_TYPE_MUTATION, {
    onCompleted: () => {
      toast.success('ProductType deleted');
    },
    onError: error => {
      toast.error(error.message);
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  });

  const onDeleteClick = id => {
    if (confirm('Are you sure you want to delete productType ' + id + '?')) {
      deleteProductType({ variables: { id } });
    }
  };

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Important</th>
            <th>Image url</th>
            <th>Created at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {productTypes.map(productType => (
            <tr key={productType.id}>
              <td>{truncate(productType.id)}</td>
              <td>{truncate(productType.name)}</td>
              <td>{checkboxInputTag(productType.important)}</td>
              <td>{truncate(productType.imageUrl)}</td>
              <td>{timeTag(productType.createdAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.productType({ id: productType.id })}
                    title={'Show productType ' + productType.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editProductType({ id: productType.id })}
                    title={'Edit productType ' + productType.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete productType ' + productType.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(productType.id)}
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

export default ProductTypesList;
