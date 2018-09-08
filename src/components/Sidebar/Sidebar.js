import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames';
import ProfilePicture from '../../assets/img/profile.png'

class Sidebar extends Component {
    render() {
        let sidebarClass = classNames({
            'sidebar': true,
            'animated': true,
            'slideInLeft': this.props.showSidebar,
            'slideOutLeft': !this.props.showSidebar
        })

        return (
            <div className={sidebarClass}>
                <i className="close-sidebar pe-7s-close" onClick={this.props.onShowSidebar}></i>
                <div className="picture-profile">
                    <img src={ProfilePicture} alt="Saipul Hidayat" srcSet={ProfilePicture}/>
                </div>
                <div className="name-profile">
                    <h3 className="fullname">Saipul Hidayat</h3>
                    <span className="nickname">@TheGerr09</span>
                </div>
                <div className="sosial-media">
                    <a href="http://">
                        <i className="fa fa-facebook"></i>
                    </a>
                    <a href="http://">
                        <i className="fa fa-linkedin"></i>
                    </a>
                    <a href="http://">
                        <i className="fa fa-instagram"></i>
                    </a>
                    <a href="http://">
                        <i className="fa fa-github"></i>
                    </a>
                    <a href="http://">
                        <i className="fa fa-telegram"></i>
                    </a>
                </div>
                <div className="list-menu">
                    <ul>
                        <li>
                            <Link to="/home" onClick={this.props.onShowSidebar}>HOME</Link>
                        </li>
                        <li>
                            <Link to="/about" onClick={this.props.onShowSidebar}>ABOUT ME</Link>
                        </li>
                        <li>
                            <Link to="/resume" onClick={this.props.onShowSidebar}>MY REMSUME</Link>
                        </li>
                        <li>
                            <Link to="/portfolio" onClick={this.props.onShowSidebar}>PORTFOLIO</Link>
                        </li>
                        <li>
                            <Link to="/contact" onClick={this.props.onShowSidebar}>CONTACT</Link>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}
 
export default Sidebar;