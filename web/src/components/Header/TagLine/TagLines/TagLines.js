import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';
import { Link, routes } from '@redwoodjs/router';

import { QUERY } from 'src/components/Header/TagLine/TagLinesCell';

const DELETE_TAG_LINE_MUTATION = gql`
  mutation DeleteTagLineMutation($id: Int!) {
    deleteTagLine(id: $id) {
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

const TagLinesList = ({ tagLines }) => {
  const [deleteTagLine] = useMutation(DELETE_TAG_LINE_MUTATION, {
    onCompleted: () => {
      toast.success('TagLine deleted');
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
    if (confirm('Are you sure you want to delete tagLine ' + id + '?')) {
      deleteTagLine({ variables: { id } });
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
          {tagLines.map((tagLine) => (
            <tr key={tagLine.id}>
              <td>{truncate(tagLine.id)}</td>
              <td>{truncate(tagLine.text)}</td>
              <td>{timeTag(tagLine.createdAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.tagLine({ id: tagLine.id })}
                    title={'Show tagLine ' + tagLine.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editTagLine({ id: tagLine.id })}
                    title={'Edit tagLine ' + tagLine.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete tagLine ' + tagLine.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(tagLine.id)}
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

export default TagLinesList;
