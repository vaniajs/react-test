import React from 'react';
import { Link } from 'react-router-dom';
import '../support/cssheader.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';


class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }


  render() {
      const styling = {fontFamily:'sans-serif', color:"white", fontWeight:"bold"}
      // const styling = {fontFamily:"Abril Fatface", color:"white", fontWeight:"bold", letterSpacing:"3px"}
    return (
      <div style={{ marginBottom:"50px" }}>
        <Navbar fixed="top" expand="md" style={{backgroundColor:"#00308F", width:"100%"}}>
          <NavbarBrand href="/" style={styling}>LOGO</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem className='bt-link'>
                <Link to='/login'className='bt-link'><NavLink className='bt-link' style={styling} className='bt-link'><i className="fas fa-sign-in-alt"/>Login</NavLink></Link>
              </NavItem>
              <NavItem className='bt-link'>
                <Link to='/register'className='bt-link'><NavLink className='bt-link' style={styling}><i className="fas fa-user-plus" />Register</NavLink></Link>
              </NavItem>
              {/* <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown> */}
            </Nav>
          </Collapse>
        </Navbar>
     </div>
    );
  }
}

export default Header;
