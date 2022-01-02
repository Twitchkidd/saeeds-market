import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';
import { Link, routes } from '@redwoodjs/router';

import { QUERY } from 'src/components/TagLineText/TagLineTextsCell';

const DELETE_TAG_LINE_TEXT_MUTATION = gql`
  mutation DeleteTagLineTextMutation($id: Int!) {
    deleteTagLineText(id: $id) {
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

const TagLineTextsList = ({ tagLineTexts }) => {
  const [deleteTagLineText] = useMutation(DELETE_TAG_LINE_TEXT_MUTATION, {
    onCompleted: () => {
      toast.success('TagLineText deleted');
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
    if (confirm('Are you sure you want to delete tagLineText ' + id + '?')) {
      deleteTagLineText({ variables: { id } });
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
          {tagLineTexts.map(tagLineText => (
            <tr key={tagLineText.id}>
              <td>{truncate(tagLineText.id)}</td>
              <td>{truncate(tagLineText.text)}</td>
              <td>{timeTag(tagLineText.createdAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.tagLineText({ id: tagLineText.id })}
                    title={'Show tagLineText ' + tagLineText.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editTagLineText({ id: tagLineText.id })}
                    title={'Edit tagLineText ' + tagLineText.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete tagLineText ' + tagLineText.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(tagLineText.id)}
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

export default TagLineTextsList;
