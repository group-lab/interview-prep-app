import { NavLink } from "react-router-dom";
import React from "react";
// import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';

// import styles from "./_navigation.scss"


const Navigation = () => {
  return (
    <div className="navigation">

      <nav className="navigation-content">

        <div className="navigation-content-logo">
          Code Cruncher
        </div>


        <div className="navigation-content-menu">
          <NavLink to="/" className="navigation-content-menu">
            Home
          </NavLink>

          <NavLink to="/" className="navigation-content-menu">
            Landing
          </NavLink>

          <NavLink to="/questions" className="navigation-content-menu">
            Interview Questions
          </NavLink>

          {/* <div className="navigation-close">
            <FontAwesomeIcon icon={faXmark} />
          </div> */}
        </div>

        <div className="navigation-content-profile">
          <NavLink to="/dashboard" className="navigation-content-profile">
            Dashboard
          </NavLink>

          <NavLink to="/" className="navigation-content-profile">
            Profile
          </NavLink>
        </div>

        <div 
        aria-label="Toggle Dark Mode"
        className="navigation-content-mode"
        // onClick={toggleTheme}
        >
        <FontAwesomeIcon icon={faCircleHalfStroke} />
        </div>

        {/* <div className="navigation-toggle">
          <FontAwesomeIcon icon={faBars} />
        </div> */}
      </nav>

    </div>
  )
}

export default Navigation;