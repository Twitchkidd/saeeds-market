import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';
import { Link, routes } from '@redwoodjs/router';

import { QUERY } from 'src/components/Header/Title/TitlesCell';

const DELETE_TITLE_MUTATION = gql`
  mutation DeleteTitleMutation($id: Int!) {
    deleteTitle(id: $id) {
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

const TitlesList = ({ titles }) => {
  const [deleteTitle] = useMutation(DELETE_TITLE_MUTATION, {
    onCompleted: () => {
      toast.success('Title deleted');
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
    if (confirm('Are you sure you want to delete title ' + id + '?')) {
      deleteTitle({ variables: { id } });
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
          {titles.map((title) => (
            <tr key={title.id}>
              <td>{truncate(title.id)}</td>
              <td>{truncate(title.text)}</td>
              <td>{timeTag(title.createdAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.title({ id: title.id })}
                    title={'Show title ' + title.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editTitle({ id: title.id })}
                    title={'Edit title ' + title.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete title ' + title.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(title.id)}
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

export default TitlesList;
