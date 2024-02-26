import { NavLink } from "react-router-dom";
import React from "react";
// import styles from "./_navigation.scss"


const Navigation = () => {
  return (
    <div className="navigation">

      <nav className="navigation-content">


        <div className="navigation-content-logo">
          Code Quiz
        </div>


        <div className="navigation-content-menu">
          <NavLink to="/" className="navigation-content-menu">
            Home 
          </NavLink>

          <NavLink to="/Landing" className="navigation-content-menu">
            Landing 
          </NavLink>

          <NavLink to="/" className="navigation-content-menu">
            Test
          </NavLink>

          <NavLink to="/" className="navigation-content-menu">
            Profile
          </NavLink>

          <div className="navigation-close">
            {/* <FontAwesomeIcon icon={faXmark} /> */}
          </div>
        </div>

        <div className="navigation-toggle">
          {/* <FontAwesomeIcon icon={faBars} /> */}
        </div>
      </nav>

    </div>
  )
}

export default Navigation;