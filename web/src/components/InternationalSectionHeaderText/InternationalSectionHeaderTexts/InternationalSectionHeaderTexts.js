import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';
import { Link, routes } from '@redwoodjs/router';

import { QUERY } from 'src/components/InternationalSectionHeaderText/InternationalSectionHeaderTextsCell';

const DELETE_INTERNATIONAL_SECTION_HEADER_TEXT_MUTATION = gql`
  mutation DeleteInternationalSectionHeaderTextMutation($id: Int!) {
    deleteInternationalSectionHeaderText(id: $id) {
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

const InternationalSectionHeaderTextsList = ({
  internationalSectionHeaderTexts,
}) => {
  const [deleteInternationalSectionHeaderText] = useMutation(
    DELETE_INTERNATIONAL_SECTION_HEADER_TEXT_MUTATION,
    {
      onCompleted: () => {
        toast.success('InternationalSectionHeaderText deleted');
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
        'Are you sure you want to delete internationalSectionHeaderText ' +
          id +
          '?'
      )
    ) {
      deleteInternationalSectionHeaderText({ variables: { id } });
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
          {internationalSectionHeaderTexts.map(
            internationalSectionHeaderText => (
              <tr key={internationalSectionHeaderText.id}>
                <td>{truncate(internationalSectionHeaderText.id)}</td>
                <td>{truncate(internationalSectionHeaderText.text)}</td>
                <td>{timeTag(internationalSectionHeaderText.createdAt)}</td>
                <td>
                  <nav className="rw-table-actions">
                    <Link
                      to={routes.internationalSectionHeaderText({
                        id: internationalSectionHeaderText.id,
                      })}
                      title={
                        'Show internationalSectionHeaderText ' +
                        internationalSectionHeaderText.id +
                        ' detail'
                      }
                      className="rw-button rw-button-small"
                    >
                      Show
                    </Link>
                    <Link
                      to={routes.editInternationalSectionHeaderText({
                        id: internationalSectionHeaderText.id,
                      })}
                      title={
                        'Edit internationalSectionHeaderText ' +
                        internationalSectionHeaderText.id
                      }
                      className="rw-button rw-button-small rw-button-blue"
                    >
                      Edit
                    </Link>
                    <button
                      type="button"
                      title={
                        'Delete internationalSectionHeaderText ' +
                        internationalSectionHeaderText.id
                      }
                      className="rw-button rw-button-small rw-button-red"
                      onClick={() =>
                        onDeleteClick(internationalSectionHeaderText.id)
                      }
                    >
                      Delete
                    </button>
                  </nav>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default InternationalSectionHeaderTextsList;
