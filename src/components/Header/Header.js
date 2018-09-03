import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
    render() { 
        return (
            <header className="site-header">
                <Link to="/home">Saipul Hidayat</Link>
                <div className="collapse-bar">
                    <div className="bar-line"></div>
                    <div className="bar-line"></div>
                    <div className="bar-line"></div>
                </div>
            </header>
        );
    }
}
 
export default Header;