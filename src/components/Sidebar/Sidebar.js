import React, { Component } from 'react'
import ProfilePicture from '../../assets/img/profile.png'

class Sidebar extends Component {
    render() { 
        return (
            <div className="sidebar">
                <div className="picture-profile">
                    <img src={ProfilePicture} alt="Profile Picture" srcset={ProfilePicture}/>
                </div>
                <div className="name-profile">
                    <h3 className="fullname">Saipul Hidayat</h3>
                    <span className="nickname">@TheGerr09</span>
                </div>
                <div className="sosial-media">
                    <ul>
                        <li>
                            <a href="http://">
                                <i className=""></i>
                            </a>
                        </li>
                        <li>
                            <a href="http://">
                                <i className=""></i>
                            </a>
                        </li>
                        <li>
                            <a href="http://">
                                <i className=""></i>
                            </a>
                        </li>
                        <li>
                            <a href="http://">
                                <i className=""></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}
 
export default Sidebar;