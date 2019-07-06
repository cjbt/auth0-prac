module.exports = {
  domain: process.env.REACT_APP_AUTH0_DOMAIN,
  clientId: process.env.REACT_APP_AUTH0_CLIENT_ID,
  audience: `https://${process.env.REACT_APP_AUTH0_DOMAIN}/userinfo`
};
