import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';
import { Link, routes, navigate } from '@redwoodjs/router';

const DELETE_PRODUCTS_SECTION_HEADER_TEXT_MUTATION = gql`
  mutation DeleteProductsSectionHeaderTextMutation($id: Int!) {
    deleteProductsSectionHeaderText(id: $id) {
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

const ProductsSectionHeaderText = ({ productsSectionHeaderText }) => {
  const [deleteProductsSectionHeaderText] = useMutation(
    DELETE_PRODUCTS_SECTION_HEADER_TEXT_MUTATION,
    {
      onCompleted: () => {
        toast.success('ProductsSectionHeaderText deleted');
        navigate(routes.productsSectionHeaderTexts());
      },
      onError: error => {
        toast.error(error.message);
      },
    }
  );

  const onDeleteClick = id => {
    if (
      confirm(
        'Are you sure you want to delete productsSectionHeaderText ' + id + '?'
      )
    ) {
      deleteProductsSectionHeaderText({ variables: { id } });
    }
  };

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            ProductsSectionHeaderText {productsSectionHeaderText.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{productsSectionHeaderText.id}</td>
            </tr>
            <tr>
              <th>Text</th>
              <td>{productsSectionHeaderText.text}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(productsSectionHeaderText.createdAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editProductsSectionHeaderText({
            id: productsSectionHeaderText.id,
          })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(productsSectionHeaderText.id)}
        >
          Delete
        </button>
      </nav>
    </>
  );
};

export default ProductsSectionHeaderText;
