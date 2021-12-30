import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';
import { Link, routes } from '@redwoodjs/router';

import { QUERY } from 'src/components/ProductsSectionHeader/ProductsSectionHeadersCell';

const DELETE_PRODUCTS_SECTION_HEADER_MUTATION = gql`
  mutation DeleteProductsSectionHeaderMutation($id: Int!) {
    deleteProductsSectionHeader(id: $id) {
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

const ProductsSectionHeadersList = ({ productsSectionHeaders }) => {
  const [deleteProductsSectionHeader] = useMutation(
    DELETE_PRODUCTS_SECTION_HEADER_MUTATION,
    {
      onCompleted: () => {
        toast.success('ProductsSectionHeader deleted');
      },
      onError: error => {
        toast.error(error.message);
      },
      // This refetches the query on the list page. Read more about other ways to
      // update the cache over here:
      // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
      refetchQueries: [{ query: QUERY }],
      awaitRefetchQueries: true,
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
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Text</th>
            <th>Image urls</th>
            <th>Created at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {productsSectionHeaders.map(productsSectionHeader => (
            <tr key={productsSectionHeader.id}>
              <td>{truncate(productsSectionHeader.id)}</td>
              <td>{truncate(productsSectionHeader.text)}</td>
              <td>{truncate(productsSectionHeader.imageUrls)}</td>
              <td>{timeTag(productsSectionHeader.createdAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.productsSectionHeader({
                      id: productsSectionHeader.id,
                    })}
                    title={
                      'Show productsSectionHeader ' +
                      productsSectionHeader.id +
                      ' detail'
                    }
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editProductsSectionHeader({
                      id: productsSectionHeader.id,
                    })}
                    title={
                      'Edit productsSectionHeader ' + productsSectionHeader.id
                    }
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={
                      'Delete productsSectionHeader ' + productsSectionHeader.id
                    }
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(productsSectionHeader.id)}
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

export default ProductsSectionHeadersList;
