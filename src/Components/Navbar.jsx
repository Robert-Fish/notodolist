import React, { Component } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavItem } from 'react-bootstrap';
class CustomNavbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <Navbar default collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">Notodolist</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem eventKey={1} componentClass={Link} href="/" to="/">
                Home
              </NavItem>
              <NavItem eventKey={2} componentClass={Link} href="/about" to="/about">
                About
              </NavItem>
              <NavItem eventKey={3} componentClass={Link} href="/lists" to="/lists">
                Lists
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default CustomNavbar;
