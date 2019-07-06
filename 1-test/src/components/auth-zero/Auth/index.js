import auth0 from 'auth0-js';
import history from '../history';
import jwtDecode from 'jwt-decode';
import axios from 'axios';

/**
 * export const AUTH_CONFIG = {
    domain: process.env.REACT_APP_AUTH0_DOMAIN,
    clientId: process.env.REACT_APP_AUTH0_CLIENT_ID,
    callbackUrl: process.env.REACT_APP_AUTH0_CALLBACK_URL
};
 */

export default class Auth {
  auth0 = new auth0.WebAuth({
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

  handleAuthentication = () => {
    this.auth0.parseHash((err, authResults) => {
      if (authResults && authResults.accessToken && authResults.idToken) {
        let expireAt = JSON.stringify(
          authResults.expiresIn * 1000 + new Date().getTime()
        );
        localStorage.setItem('isLoggedIn', true);
        localStorage.setItem('access_token', authResults.accessToken);
        localStorage.setItem('id_token', authResults.idToken);
        localStorage.setItem('expires_at', expireAt);
      } else if (err) {
        history.replace('/');
      }
    });
  };

  isAuthenticated = () => {
    let expireAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expireAt;
  };

  logout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');

    history.replace('/');
  };

  getProfile = () => {
    if (localStorage.id_token) {
      return jwtDecode(localStorage.id_token);
    }
  };

  /**
 * {
  "given_name": "cj",
  "family_name": "tantay",
  "nickname": "cjbtantay",
  "name": "cj tantay",
  "picture": "https://lh6.googleusercontent.com/-8ol-z0cVdv0/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3remWbySebyEeMZmb2etogz2aob1vA/photo.jpg",
  "locale": "en",
  "updated_at": "2019-07-04T03:53:14.853Z",
  "iss": "https://dev-awanin.auth0.com/",
  "sub": "google-oauth2|112842567059301756953",
  "aud": "jL3DmsGm2hyXC9cydJJEZuJNJtpNt5AU",
  "iat": 1562212394,
  "exp": 1562248394,
  "at_hash": "6S6TrnikErfWW2pEn1PRMA",
  "nonce": "4_qTIKM~yQ2u2vSvTxe2ZnLCrD.re_li"
}
 */
}
