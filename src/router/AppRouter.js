import React from 'react';
import { Router, Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import MainPage from '../pages/MainPage';
import NonprofitsPage from '../pages/NonprofitsPage';

export const history = createHistory();

const AppRouter = () => {
  return (
    <Router history={history}>
      <div style={{ height: '100%' }}>
        <Route path="/" component={MainPage} exact={true} />
        <Route path="/non-profits" component={NonprofitsPage} />
      </div>
    </Router>
  );
};

export default AppRouter;
