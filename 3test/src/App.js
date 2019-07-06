import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Callback from './components/Auth/Callback/Callback';
import Dashboard from './components/Dashboard/Dashboard';
import NavBar from './components/NavBar/NavBar';

import Auth from './components/Auth/Auth';
import Home from './components/Home';

const auth = new Auth();

const handleAuthentication = ({ location }) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthorization();
  }
};

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          path="/callback"
          render={props => {
            handleAuthentication(props);
            return <Callback {...props} />;
          }}
        />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </div>
  );
}

export default App;
