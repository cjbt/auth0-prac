import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';
import history from './components/Auth/history';

const AppWithRouter = withRouter(App);
const app = (
  <Router history={history}>
    <AppWithRouter />
  </Router>
);

ReactDOM.render(app, document.getElementById('root'));
