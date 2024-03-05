import { NavLink } from "react-router-dom";
import React from "react";
// import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';


// import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

// import styles from "./_navigation.scss"


const Navigation = () => {
  return (

    <Navbar collapseOnSelect expand="lg" className="navigation">
      <Navbar.Brand href="/" className="navigation-content-logo">Code Cruncher</Navbar.Brand>
      <Navbar.Toggle className="navbar-toggle" aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" className="navigation-content">
        <Nav className="mr-auto navigation-content-menu">
          <Nav.Link className="navigation-content-menu" href="/">Home</Nav.Link>
          <Nav.Link className="navigation-content-menu" href="/landing">Landing</Nav.Link>
          <Nav.Link className="navigation-content-menu" href="/questions">Interview Questions</Nav.Link>
          <Nav.Link className="navigation-content-menu" href="/about">About</Nav.Link>

          {/* Add more Nav.Link or NavDropdown as needed */}
        </Nav>
        <Nav className="navigation-content-profile">
          <Nav.Link className="navigation-content-profile" href="/dashboard">Dashboard</Nav.Link>
          <Nav.Link className="navigation-content-profile" href="/profile">Profile</Nav.Link>
        </Nav>

        <div
          aria-label="Toggle Dark Mode"
          className="navigation-content-mode"
        // onClick={toggleTheme}
        >
          <FontAwesomeIcon icon={faCircleHalfStroke} />
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;