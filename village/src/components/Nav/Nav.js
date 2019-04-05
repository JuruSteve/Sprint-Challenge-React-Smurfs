import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

const Nav = props => {
  return (
    <div className="navbar">
      <div className="nav-links">
        <NavLink exact to="/">
          Home
        </NavLink>
        <NavLink exact to="/smurf-form">
          Add Smurf
        </NavLink>
      </div>
    </div>
  );
};

export default Nav;
