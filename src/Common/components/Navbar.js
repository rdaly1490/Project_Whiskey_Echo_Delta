import { withRouter } from 'react-router';
import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import { NavItem } from 'react-bootstrap';
import { MenuItem } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     key: 1
  //   };
  // }

  render() {
    // console.log(this.props.location.pathname);
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">React-Bootstrap</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} href="/itinerary">
              Itinerary
            </NavItem>
            <NavItem eventKey={2} href="/photos">
              Link Right
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default withRouter(App);
