import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';
import { navigate, routes } from '@redwoodjs/router';

import NewItemForm from 'src/components/NewItem/NewItemForm';

export const QUERY = gql`
  query EditNewItemById($id: Int!) {
    newItem: newItem(id: $id) {
      id
      title
      description
      createdAt
    }
  }
`;
const UPDATE_NEW_ITEM_MUTATION = gql`
  mutation UpdateNewItemMutation($id: Int!, $input: UpdateNewItemInput!) {
    updateNewItem(id: $id, input: $input) {
      id
      title
      description
      createdAt
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
);

export const Success = ({ newItem }) => {
  const [updateNewItem, { loading, error }] = useMutation(
    UPDATE_NEW_ITEM_MUTATION,
    {
      onCompleted: () => {
        toast.success('NewItem updated');
        navigate(routes.newItems());
      },
      onError: (error) => {
        toast.error(error.message);
      },
    }
  );

  const onSave = (input, id) => {
    updateNewItem({ variables: { id, input } });
  };

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit NewItem {newItem.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <NewItemForm
          newItem={newItem}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  );
};
