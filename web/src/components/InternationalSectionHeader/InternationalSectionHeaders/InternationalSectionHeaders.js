import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';
import { Link, routes } from '@redwoodjs/router';

import { QUERY } from 'src/components/InternationalSectionHeader/InternationalSectionHeadersCell';

const DELETE_INTERNATIONAL_SECTION_HEADER_MUTATION = gql`
  mutation DeleteInternationalSectionHeaderMutation($id: Int!) {
    deleteInternationalSectionHeader(id: $id) {
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

const InternationalSectionHeadersList = ({ internationalSectionHeaders }) => {
  const [deleteInternationalSectionHeader] = useMutation(
    DELETE_INTERNATIONAL_SECTION_HEADER_MUTATION,
    {
      onCompleted: () => {
        toast.success('InternationalSectionHeader deleted');
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
        'Are you sure you want to delete internationalSectionHeader ' + id + '?'
      )
    ) {
      deleteInternationalSectionHeader({ variables: { id } });
    }
  };

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Text</th>
            <th>With from</th>
            <th>Created at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {internationalSectionHeaders.map(internationalSectionHeader => (
            <tr key={internationalSectionHeader.id}>
              <td>{truncate(internationalSectionHeader.id)}</td>
              <td>{truncate(internationalSectionHeader.text)}</td>
              <td>{truncate(internationalSectionHeader.withFrom)}</td>
              <td>{timeTag(internationalSectionHeader.createdAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.internationalSectionHeader({
                      id: internationalSectionHeader.id,
                    })}
                    title={
                      'Show internationalSectionHeader ' +
                      internationalSectionHeader.id +
                      ' detail'
                    }
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editInternationalSectionHeader({
                      id: internationalSectionHeader.id,
                    })}
                    title={
                      'Edit internationalSectionHeader ' +
                      internationalSectionHeader.id
                    }
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={
                      'Delete internationalSectionHeader ' +
                      internationalSectionHeader.id
                    }
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(internationalSectionHeader.id)}
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

export default InternationalSectionHeadersList;
