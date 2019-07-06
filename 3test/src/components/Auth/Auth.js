import Auth0 from 'auth0-js';
import jwtDecode from 'jwt-decode';
import axios from 'axios';
import history from './history';

export default class Auth {
  auth0 = new Auth0.WebAuth({
    domain: process.env.REACT_APP_AUTH0_DOMAIN,
    clientID: process.env.REACT_APP_AUTH0_CLIENT_ID,
    redirectUri: process.env.REACT_APP_AUTH0_CALLBACK_URL,
    audience: `https://${process.env.REACT_APP_AUTH0_DOMAIN}/userinfo`,
    responseType: 'token id_token',
    scope: 'openid profile email offline_access'
  });

  login = () => {
    this.auth0.authorize();
  };

  handleAuthorization = () => {
    this.auth0.parseHash(async (err, authResults) => {
      if (authResults && authResults.accessToken) {
        let expireAt = JSON.stringify(
          authResults.expiresIn * 1000 + new Date().getTime
        );
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('access_token', authResults.accessToken);
        localStorage.setItem('id_token', authResults.idToken);
        localStorage.setItem('expires_at', expireAt);

        const decoded = jwtDecode(localStorage.id_token);

        const user = {
          name: decoded.name
        };

        try {
          await axios.post('http://localhost:6500/auth/register', user);
          history.replace('/dashboard');
        } catch (error) {
          console.error(error);
        }
      } else if (err) {
        history.replace('/');
      }
    });
  };

  logout = () => {
    localStorage.clear();
    sessionStorage.clear();

    history.replace('/');
  };
}
