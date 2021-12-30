import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';
import { navigate, routes } from '@redwoodjs/router';
import NewItemForm from 'src/components/NewItem/NewItemForm';

const CREATE_NEW_ITEM_MUTATION = gql`
  mutation CreateNewItemMutation($input: CreateNewItemInput!) {
    createNewItem(input: $input) {
      id
    }
  }
`;

const NewNewItem = () => {
  const [createNewItem, { loading, error }] = useMutation(
    CREATE_NEW_ITEM_MUTATION,
    {
      onCompleted: () => {
        toast.success('NewItem created');
        navigate(routes.newItems());
      },
      onError: error => {
        toast.error(error.message);
      },
    }
  );

  const onSave = input => {
    createNewItem({ variables: { input } });
  };

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New NewItem</h2>
      </header>
      <div className="rw-segment-main">
        <NewItemForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  );
};

export default NewNewItem;
