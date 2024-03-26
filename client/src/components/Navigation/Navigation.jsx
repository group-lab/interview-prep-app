import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navigation = () => {
  return (

    <Navbar collapseOnSelect expand="lg" className="navigation">
      <Navbar.Brand href="/" className="navigation-content-logo">Code Cruncher</Navbar.Brand>
      <Navbar.Toggle className="navbar-toggle" aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" className="navigation-content">
        <Nav className="mr-auto navigation-content-menu">          
          <NavLink className="navigation-content-menu" to="/questions">Interview Questions</NavLink>
          <NavLink className="navigation-content-menu" to="/topics">Topics</NavLink>
          <NavLink className="navigation-content-menu" to="/contribute">Contribute Question</NavLink>

          {/* Add more Nav.Link or NavDropdown as needed */}
        </Nav>
        <Nav className="navigation-content-profile">
          <NavLink className="navigation-content-profile" to="/login">Log in</NavLink>
          <NavLink className="navigation-content-profile" to="/signup">Sign up</NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;