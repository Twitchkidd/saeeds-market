import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';
import { Link, routes } from '@redwoodjs/router';

import { QUERY } from 'src/components/BusinessInfo/BusinessInfosCell';

const DELETE_BUSINESS_INFO_MUTATION = gql`
  mutation DeleteBusinessInfoMutation($id: Int!) {
    deleteBusinessInfo(id: $id) {
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

const BusinessInfosList = ({ businessInfos }) => {
  const [deleteBusinessInfo] = useMutation(DELETE_BUSINESS_INFO_MUTATION, {
    onCompleted: () => {
      toast.success('BusinessInfo deleted');
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
    if (confirm('Are you sure you want to delete businessInfo ' + id + '?')) {
      deleteBusinessInfo({ variables: { id } });
    }
  };

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Address</th>
            <th>Hours</th>
            <th>Number</th>
            <th>Created at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {businessInfos.map(businessInfo => (
            <tr key={businessInfo.id}>
              <td>{truncate(businessInfo.id)}</td>
              <td>{truncate(businessInfo.name)}</td>
              <td>{truncate(businessInfo.address)}</td>
              <td>{truncate(businessInfo.hours)}</td>
              <td>{truncate(businessInfo.number)}</td>
              <td>{timeTag(businessInfo.createdAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.businessInfo({ id: businessInfo.id })}
                    title={'Show businessInfo ' + businessInfo.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editBusinessInfo({ id: businessInfo.id })}
                    title={'Edit businessInfo ' + businessInfo.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete businessInfo ' + businessInfo.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(businessInfo.id)}
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

export default BusinessInfosList;
