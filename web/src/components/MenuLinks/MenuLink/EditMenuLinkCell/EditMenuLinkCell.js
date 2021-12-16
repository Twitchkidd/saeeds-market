import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';
import { navigate, routes } from '@redwoodjs/router';

import MenuLinkForm from 'src/components/MenuLinks/MenuLink/MenuLinkForm';

export const QUERY = gql`
  query EditMenuLinkById($id: Int!) {
    menuLink: menuLink(id: $id) {
      id
      name
      text
      url
      createdAt
    }
  }
`;
const UPDATE_MENU_LINK_MUTATION = gql`
  mutation UpdateMenuLinkMutation($id: Int!, $input: UpdateMenuLinkInput!) {
    updateMenuLink(id: $id, input: $input) {
      id
      name
      text
      url
      createdAt
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
);

export const Success = ({ menuLink }) => {
  const [updateMenuLink, { loading, error }] = useMutation(
    UPDATE_MENU_LINK_MUTATION,
    {
      onCompleted: () => {
        toast.success('MenuLink updated');
        navigate(routes.menuLinks());
      },
      onError: (error) => {
        toast.error(error.message);
      },
    }
  );

  const onSave = (input, id) => {
    updateMenuLink({ variables: { id, input } });
  };

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit MenuLink {menuLink.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <MenuLinkForm
          menuLink={menuLink}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  );
};
