import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Profile from './components/Profile';
import { useAuth0 } from './react-auth0-wrapper';
import PrivateRoute from './components/PrivateRoute';

function App() {
  const { loading } = useAuth0();

  if (loading) {
    return 'Loading...';
  }
  return (
    <Router>
      <div className="App">
        <header>
          <NavBar />
        </header>
        <Switch>
          <Route path="/" exact />
          <PrivateRoute path="/profile" component={Profile} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
