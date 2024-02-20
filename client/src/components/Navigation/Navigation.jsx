import { NavLink } from "react-router-dom";
import React from "react";
// import styles from "./_navigation.scss"


const Navigation = () => {
  return (
    <div className="navigation">
      <div className="navigation-content">

        {/* logo */}
        <div>
          <span className="navigation-content-logo">
            Code Quiz
          </span>
        </div>

        <div>

          <NavLink to="/" className="navigation-content-link">
            Home
          </NavLink>

          <NavLink to="/" className="navigation-content-link">
            Test!
          </NavLink>

          <NavLink to="/" className="navigation-content-link">
            Profile
          </NavLink>

        </div>

      </div>
    </div>
  )
}

export default Navigation;