import React, { Component } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import AppContainer from './AppContainer'

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path='*' exact={true} component={AppContainer}/>
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
