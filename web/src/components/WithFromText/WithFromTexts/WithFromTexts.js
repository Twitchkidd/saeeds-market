import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';
import { Link, routes } from '@redwoodjs/router';

import { QUERY } from 'src/components/WithFromText/WithFromTextsCell';

const DELETE_WITH_FROM_TEXT_MUTATION = gql`
  mutation DeleteWithFromTextMutation($id: Int!) {
    deleteWithFromText(id: $id) {
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

const WithFromTextsList = ({ withFromTexts }) => {
  const [deleteWithFromText] = useMutation(DELETE_WITH_FROM_TEXT_MUTATION, {
    onCompleted: () => {
      toast.success('WithFromText deleted');
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
    if (confirm('Are you sure you want to delete withFromText ' + id + '?')) {
      deleteWithFromText({ variables: { id } });
    }
  };

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Text</th>
            <th>Created at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {withFromTexts.map(withFromText => (
            <tr key={withFromText.id}>
              <td>{truncate(withFromText.id)}</td>
              <td>{truncate(withFromText.text)}</td>
              <td>{timeTag(withFromText.createdAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.withFromText({ id: withFromText.id })}
                    title={'Show withFromText ' + withFromText.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editWithFromText({ id: withFromText.id })}
                    title={'Edit withFromText ' + withFromText.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete withFromText ' + withFromText.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(withFromText.id)}
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

export default WithFromTextsList;
