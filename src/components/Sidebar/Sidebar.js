import React, { Component } from 'react'
import ProfilePicture from '../../assets/img/profile.png'

class Sidebar extends Component {
    render() { 
        return (
            <div className="sidebar">
                <div className="picture-profile">
                    <img src={ProfilePicture} alt="Profile Picture" srcset={ProfilePicture}/>
                </div>
            </div>
        );
    }
}
 
export default Sidebar;