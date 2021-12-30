import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';
import { Link, routes } from '@redwoodjs/router';

import { QUERY } from 'src/components/WhatsNewText/WhatsNewTextsCell';

const DELETE_WHATS_NEW_TEXT_MUTATION = gql`
  mutation DeleteWhatsNewTextMutation($id: Int!) {
    deleteWhatsNewText(id: $id) {
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

const WhatsNewTextsList = ({ whatsNewTexts }) => {
  const [deleteWhatsNewText] = useMutation(DELETE_WHATS_NEW_TEXT_MUTATION, {
    onCompleted: () => {
      toast.success('WhatsNewText deleted');
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
    if (confirm('Are you sure you want to delete whatsNewText ' + id + '?')) {
      deleteWhatsNewText({ variables: { id } });
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
          {whatsNewTexts.map(whatsNewText => (
            <tr key={whatsNewText.id}>
              <td>{truncate(whatsNewText.id)}</td>
              <td>{truncate(whatsNewText.text)}</td>
              <td>{timeTag(whatsNewText.createdAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.whatsNewText({ id: whatsNewText.id })}
                    title={'Show whatsNewText ' + whatsNewText.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editWhatsNewText({ id: whatsNewText.id })}
                    title={'Edit whatsNewText ' + whatsNewText.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete whatsNewText ' + whatsNewText.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(whatsNewText.id)}
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

export default WhatsNewTextsList;
