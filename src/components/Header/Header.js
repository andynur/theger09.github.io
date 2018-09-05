import React, { Component } from 'react'

class Header extends Component {
  render() { 
    return (
      <div className="menu-header">
        <Navbar color="faded" light>
          <NavbarBrand href="/" className="mr-auto">Saipul Hidayat</NavbarBrand>
          <NavbarToggler className="mr-2" />
          <Collapse navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
 
export default Header;