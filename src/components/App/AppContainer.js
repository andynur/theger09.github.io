import React, { Component } from 'react'
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';
import routes from '../../routes';

import Header from '../Header';
import Sidebar from '../Sidebar';

class AppContainer extends Component {
    state = {  }
    render() { 
        return (
            <div className="app">
                <Header/>
                <Sidebar/>
                <div className="wraper">
                    <HashRouter>
                        <Switch>
                            {
                            routes.map( (route, idx) => {
                            return route.component ? (
                            <Route key={idx} path={route.path} exact={route.exact} name={route.name} render={ props => (<route.component {...props} />)} />): (null);})
                            }
                            <Redirect from="/" to="/home" />
                        </Switch>
                    </HashRouter>
                </div>
            </div>
        );
    }
}
 
export default AppContainer;