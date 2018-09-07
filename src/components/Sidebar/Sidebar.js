import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ProfilePicture from '../../assets/img/profile.png'

class Sidebar extends Component {
    render() { 
        return (
            <div className="sidebar">
                <div className="picture-profile">
                    <img src={ProfilePicture} alt="Saipul Hidayat" srcset={ProfilePicture}/>
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
                            <Link to="/">HOME</Link>
                        </li>
                        <li>
                            <Link to="/">ABOUT ME</Link>
                        </li>
                        <li>
                            <Link to="/">MY REMSUME</Link>
                        </li>
                        <li>
                            <Link to="/">PORTFOLIO</Link>
                        </li>
                        <li>
                            <Link to="/">CONTACT</Link>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}
 
export default Sidebar;