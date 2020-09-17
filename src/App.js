import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

import * as ROUTES from './constants/routes';
import Index from './components/views/index';
import Home from './components/views/home';
import About from './components/views/about';
import NotFound from './components/views/notfound';

function App() {
  return (

    <Router>
      <Switch>
        <Route exact path={ROUTES.LANDING} component={Home} />
        {/* <Route path={ROUTES.HOME} component={} /> */}
        {/* <Route path={ROUTES.ABOUT} component={About} /> */}
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
