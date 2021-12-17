import { Link, routes } from '@redwoodjs/router';
import { MetaTags } from '@redwoodjs/web';
import { useAuth } from '@redwoodjs/auth';

const UserAuthTools = () => {
  const { loading, isAuthenticated, logIn, logOut } = useAuth();

  if (loading) {
    // auth is rehydrating
    return null;
  }

  return (
    <button
      onClick={async () => {
        if (isAuthenticated) {
          await logOut({ returnTo: process.env.AUTH0_REDIRECT_URI });
        } else {
          const searchParams = new URLSearchParams(window.location.search);
          await logIn({
            appState: { targetUrl: searchParams.get('redirectTo') },
          });
        }
      }}
    >
      {isAuthenticated ? 'Log out' : 'Log in'}
    </button>
  );
};

const AdminPage = () => {
  return (
    <>
      <MetaTags
        title="Admin"
        // description="Admin description"
        /* you should un-comment description and add a unique description, 155 characters or less
      You can look at this documentation for best practices : https://developers.google.com/search/docs/advanced/appearance/good-titles-snippets */
      />

      <h1>Admin Page</h1>
      <Link to={routes.titles()}>Title</Link>
      <Link to={routes.tagLines()}>Tag Line</Link>
      <Link to={routes.menuLinks()}>Menu Links</Link>
      <Link to={routes.businessInfos()}>Business Info</Link>
      <UserAuthTools />
    </>
  );
};

export default AdminPage;
