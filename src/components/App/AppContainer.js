import React, { Component } from 'react'
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom'
import routes from '../../routes'

import Header from '../Header'
import Sidebar from '../Sidebar'

class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDisplay: false
        }
        this.showSidebar = this.showSidebar.bind(this)
    }

    showSidebar() {
        this.setState({
            isDisplay: !this.state.isDisplay
        })
    }

    render() { 
        return (
            <div className="app">
                <Header onShowSidebar={this.showSidebar}/>
                <Sidebar showSidebar={this.state.isDisplay} onShowSidebar={this.showSidebar}/>
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