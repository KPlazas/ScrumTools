import { UserManager } from 'oidc-client';

const config = {
  authority: 'https://localhost:7003',
  client_id: 'interactive',
  redirect_uri: 'http://localhost:3000/callback',
  client_secret: 'secret',
  response_type: 'code',
  scope: 'scrumtoolsapi.g openid profile email',
  post_logout_redirect_uri: 'https://localhost:3000',
  end_session_endpoint: 'https://localhost:7003/connect/endsession'
};

const userManager = new UserManager(config);

async function getAuthenticatedUser() {
  try {
    const user = await userManager.getUser();
    return user;
  } catch (error) {
    console.error('Error obteniendo usuario autenticado:', error);
    window.location.replace('/');
  }
}

export default userManager;
export { getAuthenticatedUser };