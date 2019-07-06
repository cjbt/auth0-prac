import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../Auth/Auth';

const auth = new Auth();
const NavBar = () => {
  const login = () => {
    auth.login();
  };
  const logout = () => {
    auth.logout();
  };
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
      </nav>
      <button onClick={login}>log in</button>
      <button onClick={logout}>log out</button>
    </div>
  );
};

export default NavBar;
