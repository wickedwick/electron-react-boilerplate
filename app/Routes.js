/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route } from 'react-router';
import routes from './constants/routes';
import App from './containers/App';
import HomePage from './containers/HomePage';
import CounterPage from './containers/CounterPage';
import LoginPage from './containers/LoginPage';
import ContentListPage from './containers/ContentListPage';

export default () => (
  <App>
    <Switch>
      <Route path={routes.COUNTER} component={CounterPage} />
      <Route path={routes.LOGIN} component={LoginPage} />
      <Route path={routes.CONTENTLIST} component={ContentListPage} />
      <Route path={routes.HOME} component={HomePage} />
    </Switch>
  </App>
);
