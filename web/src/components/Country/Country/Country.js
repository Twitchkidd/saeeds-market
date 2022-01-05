import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';
import { Link, routes, navigate } from '@redwoodjs/router';

const DELETE_COUNTRY_MUTATION = gql`
  mutation DeleteCountryMutation($id: Int!) {
    deleteCountry(id: $id) {
      id
    }
  }
`;

const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  );
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

const Country = ({ country }) => {
  const [deleteCountry] = useMutation(DELETE_COUNTRY_MUTATION, {
    onCompleted: () => {
      toast.success('Country deleted');
      navigate(routes.countries());
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete country ' + id + '?')) {
      deleteCountry({ variables: { id } });
    }
  };

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Country {country.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{country.id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{country.name}</td>
            </tr>
            <tr>
              <th>Abbr</th>
              <td>{country.abbr}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(country.createdAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editCountry({ id: country.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(country.id)}
        >
          Delete
        </button>
      </nav>
    </>
  );
};

export default Country;
