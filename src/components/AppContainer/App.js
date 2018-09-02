import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import routes from '../../routes';

import Header from '../Header';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header/>
        <Switch>
          {
            routes.map( (route, idx) => {
            return route.component ? (
              <Route key={idx} path={route.path} exact={route.exact} name={route.name} render={ props => (<route.component {...props} />)} />): (null);}
            )
          }
          <Redirect from="/" to="/home" />
        </Switch>
      </div>
    );
  }
}

export default App;
