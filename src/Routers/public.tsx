import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { NotFound } from '../pages/404';
import { CreateAccount } from '../pages/create-account';
import { Login } from '../pages/Login';
export const PublicRouter = () => {

  return (
    <Router>
      <Switch>
        <Route path="/create-account" component={CreateAccount} />
        <Route path="/" exact component={Login} />
        <Route component={NotFound}/>
      </Switch>
    </Router>
  );
};
