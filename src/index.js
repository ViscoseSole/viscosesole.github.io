import React from 'react';
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch } from 'react-router-dom'

import App from './components/App.jsx';

ReactDOM.render(
  <HashRouter>
    <Switch>
      <Route path='/' exact component={App} />
      <Route path='/:repository' component={App} />
      <Route component={NotFound} />
    </Switch>
  </HashRouter>
  , document.getElementById('root'));

const NotFound = () => <div>Not Found!</div>;
