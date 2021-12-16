import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';
import { navigate, routes } from '@redwoodjs/router';
import MenuLinkForm from 'src/components/MenuLinks/MenuLink/MenuLinkForm';

const CREATE_MENU_LINK_MUTATION = gql`
  mutation CreateMenuLinkMutation($input: CreateMenuLinkInput!) {
    createMenuLink(input: $input) {
      id
    }
  }
`;

const NewMenuLink = () => {
  const [createMenuLink, { loading, error }] = useMutation(
    CREATE_MENU_LINK_MUTATION,
    {
      onCompleted: () => {
        toast.success('MenuLink created');
        navigate(routes.menuLinks());
      },
      onError: (error) => {
        toast.error(error.message);
      },
    }
  );

  const onSave = (input) => {
    createMenuLink({ variables: { input } });
  };

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New MenuLink</h2>
      </header>
      <div className="rw-segment-main">
        <MenuLinkForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  );
};

export default NewMenuLink;
