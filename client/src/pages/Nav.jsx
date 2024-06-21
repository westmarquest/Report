import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const Nav = () => {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-n8">
      <div className="container">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink
                className="nav-link "
                to="/marques"
                activeclassname="active"
                exact
                style={{ textShadow: "1px 1px 1px #888787" }}
              >
                About Me
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/marques/portfolio"
                activeclassname="active"
                style={{ textShadow: "1px 1px 1px #888787" }}
              >
                Portfolio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/marques/resume"
                activeclassname="active"
                style={{ textShadow: "1px 1px 1px #888787" }}
              >
                Resume
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/marques/contact"
                activeclassname="active"
                style={{ textShadow: "1px 1px 1px #888787" }}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
