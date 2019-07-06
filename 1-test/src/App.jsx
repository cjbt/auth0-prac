import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import history from './components/auth-zero/history';
import './App.css';
import Auth from './components/auth-zero/Auth';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Callback from './components/auth-zero/Callback/Callback';

const auth = new Auth();

function App() {
  const login = () => {
    auth.login();
  };

  const logout = () => {
    auth.logout();
  };
  React.useEffect(() => {
    auth.handleAuthentication();
  }, []);
  return (
    <Router history={history}>
      <div className="App">
        <button onClick={login}>login</button>
        <button onClick={logout}>logout</button>
        <Route exact path="/" component={Home} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/callback" component={Callback} />
      </div>
    </Router>
  );
}

export default App;
