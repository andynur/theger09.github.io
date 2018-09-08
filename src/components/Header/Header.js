import React, { Component } from 'react'
import { Navbar, NavbarToggler, NavbarBrand } from 'reactstrap'

class Header extends Component {
  render() {
    return (
      <div className="menu-header">
        <Navbar color="light" light>
          <NavbarBrand href="/" className="mr-auto">Saipul Hidayat</NavbarBrand>
          <NavbarToggler onClick={this.props.onShowSidebar}/>
        </Navbar>
      </div>
    );
  }
}
 
export default Header;