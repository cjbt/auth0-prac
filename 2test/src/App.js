import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './components/Navbar';
import Profile from './components/Profile';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <Switch>
        <Route exact path="/" />
        <PrivateRoute path="/profile" component={Profile} />
      </Switch>
    </div>
  );
}

export default App;
