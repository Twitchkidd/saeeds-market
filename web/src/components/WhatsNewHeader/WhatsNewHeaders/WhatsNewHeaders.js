import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';
import { Link, routes } from '@redwoodjs/router';

import { QUERY } from 'src/components/WhatsNewHeader/WhatsNewHeadersCell';

const DELETE_WHATS_NEW_HEADER_MUTATION = gql`
  mutation DeleteWhatsNewHeaderMutation($id: Int!) {
    deleteWhatsNewHeader(id: $id) {
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

const WhatsNewHeadersList = ({ whatsNewHeaders }) => {
  const [deleteWhatsNewHeader] = useMutation(DELETE_WHATS_NEW_HEADER_MUTATION, {
    onCompleted: () => {
      toast.success('WhatsNewHeader deleted');
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
    if (confirm('Are you sure you want to delete whatsNewHeader ' + id + '?')) {
      deleteWhatsNewHeader({ variables: { id } });
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
          {whatsNewHeaders.map((whatsNewHeader) => (
            <tr key={whatsNewHeader.id}>
              <td>{truncate(whatsNewHeader.id)}</td>
              <td>{truncate(whatsNewHeader.text)}</td>
              <td>{timeTag(whatsNewHeader.createdAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.whatsNewHeader({ id: whatsNewHeader.id })}
                    title={
                      'Show whatsNewHeader ' + whatsNewHeader.id + ' detail'
                    }
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editWhatsNewHeader({ id: whatsNewHeader.id })}
                    title={'Edit whatsNewHeader ' + whatsNewHeader.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete whatsNewHeader ' + whatsNewHeader.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(whatsNewHeader.id)}
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

export default WhatsNewHeadersList;
