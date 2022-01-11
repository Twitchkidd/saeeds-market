import { useAuth } from '@redwoodjs/auth';
import Button from 'src/components/Button/Button';

const UserAuthTools = () => {
  const { loading, isAuthenticated, logIn, logOut, currentUser, userMetadata } =
    useAuth();

  if (loading) {
    // auth is rehydrating
    return null;
  }

  console.log(currentUser);
  console.log(userMetadata);

  return (
    <div
      style={{
        width: '100%',
        height: '309px',
        display: 'grid',
        placeItems: 'center',
      }}
    >
      <Button
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
        dark
      >
        {isAuthenticated ? 'Log out' : 'Log in'}
      </Button>
    </div>
  );
};
export default UserAuthTools;
