import React from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';

import { Alert } from './components/layout/Alert';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { About } from './components/pages/About';
import { Games } from './components/layout/Games';
import User from './components/users/User';
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';
import { Home } from './components/pages/Home';
import { Nofound } from './components/pages/Nofound';

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div>
            <Navbar title='Github Finder' icon='fa fa-infinity' />

            <div className='container'>
              <Alert />
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/yida' component={Games} />
                <Route exact path='/user/:login' component={User} />
                <Route component={Nofound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
