import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from './pages/login'
import Dashboard from './pages/dashboard'
import Category from './pages/category';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/dashboard' component={Dashboard} />
        <Route exact path='/category' component={Category} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
