import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import { isAuthenticated } from "./services/auth";

import Login from './pages/login'
import Dashboard from './pages/dashboard'
import Category from './pages/category';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);


const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Login} />
        <PrivateRoute exact path='/dashboard' component={Dashboard} />
        <PrivateRoute exact path='/category' component={Category} />
        <PrivateRoute exact path='/category/:id' component={Category} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
