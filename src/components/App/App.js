import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import ContainerDefault from './ContainerDefault';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path='*' exact={true} component={ContainerDefault}/>
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
