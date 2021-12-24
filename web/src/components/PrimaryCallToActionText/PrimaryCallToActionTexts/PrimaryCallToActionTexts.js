import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';
import { Link, routes } from '@redwoodjs/router';

import { QUERY } from 'src/components/PrimaryCallToActionText/PrimaryCallToActionTextsCell';

const DELETE_PRIMARY_CALL_TO_ACTION_TEXT_MUTATION = gql`
  mutation DeletePrimaryCallToActionTextMutation($id: Int!) {
    deletePrimaryCallToActionText(id: $id) {
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

const PrimaryCallToActionTextsList = ({ primaryCallToActionTexts }) => {
  const [deletePrimaryCallToActionText] = useMutation(
    DELETE_PRIMARY_CALL_TO_ACTION_TEXT_MUTATION,
    {
      onCompleted: () => {
        toast.success('PrimaryCallToActionText deleted');
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
        'Are you sure you want to delete primaryCallToActionText ' + id + '?'
      )
    ) {
      deletePrimaryCallToActionText({ variables: { id } });
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
          {primaryCallToActionTexts.map(primaryCallToActionText => (
            <tr key={primaryCallToActionText.id}>
              <td>{truncate(primaryCallToActionText.id)}</td>
              <td>{truncate(primaryCallToActionText.text)}</td>
              <td>{timeTag(primaryCallToActionText.createdAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.primaryCallToActionText({
                      id: primaryCallToActionText.id,
                    })}
                    title={
                      'Show primaryCallToActionText ' +
                      primaryCallToActionText.id +
                      ' detail'
                    }
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editPrimaryCallToActionText({
                      id: primaryCallToActionText.id,
                    })}
                    title={
                      'Edit primaryCallToActionText ' +
                      primaryCallToActionText.id
                    }
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={
                      'Delete primaryCallToActionText ' +
                      primaryCallToActionText.id
                    }
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(primaryCallToActionText.id)}
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

export default PrimaryCallToActionTextsList;
