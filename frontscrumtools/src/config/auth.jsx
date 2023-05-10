import { UserManager } from 'oidc-client';

const config = {
  authority: 'https://agile-auth.azurewebsites.net/',
  client_id: 'interactive',
  redirect_uri: 'https://agile-tools-d84c1.web.app//callback',
  client_secret: 'secret',
  response_type: 'code',
  scope: 'scrumtoolsapi.g openid profile email',
  post_logout_redirect_uri: 'https://agile-tools-d84c1.web.app/',
  end_session_endpoint: 'https://agile-auth.azurewebsites.net//connect/endsession'
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