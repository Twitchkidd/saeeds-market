import { useAuth } from '@redwoodjs/auth';
import styled from 'styled-components';
import { rainbowPurple } from 'src/utils/colors';

const Button = styled.button`
  display: block;
  border-radius: 16px;
  width: calc(50vw - 64px);
  text-align: center;
  text-decoration: none;
  font-size: 24px;
  color: #fefefe;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${rainbowPurple};
`;

const UserAuthTools = () => {
  const { loading, isAuthenticated, logIn, logOut } = useAuth();

  if (loading) {
    // auth is rehydrating
    return null;
  }

  return (
    <div
      style={{
        width: '100%',
        height: '309px',
        display: 'grid',
        placeItems: 'center',
        flexShrink: 0,
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
      >
        {isAuthenticated ? 'Log out' : 'Log in'}
      </Button>
    </div>
  );
};
export default UserAuthTools;
