import React from 'react';
import Auth from '../auth-zero/Auth';

const auth = new Auth();

const Home = () => {
  console.log(auth.getProfile().email);
  return (
    <div>
      <h1>{auth.getProfile().email || 'Name not provided'}</h1>
    </div>
  );
};

export default Home;
