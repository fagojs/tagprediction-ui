import React from "react";
import { NavLink, Link } from "react-router-dom";

import { FaSlackHash } from "react-icons/fa";
import "../css/navbar.css";

const NavBar = (props) => {
  return (
    <header>
      <div className="imgnav">
        <FaSlackHash className="App-logo fa-spin" />
        <h3 style={{ cursor: "pointer" }}>
          <Link className="nav_item" style={{ textDecoration: "none" }} to="/">
            TAG PREDICTOR
          </Link>
        </h3>
      </div>
      <div className="nav_container">
        <ul>
          <li>
            <NavLink
              className="nav_item"
              to="/"
              style={{ textDecoration: "none" }}
            >
              Home
            </NavLink>
          </li>
          {props.user && (
            <li>
              <NavLink
                className="nav_item"
                to="/landingpage"
                style={{ textDecoration: "none" }}
              >
                Dashboard
              </NavLink>
            </li>
          )}
          {
            //checking presence of user and rendering login and logout button
            props.user ? (
              <li>
                <NavLink
                  className="nav_item"
                  to="/logout"
                  style={{ textDecoration: "none" }}
                >
                  Logout
                </NavLink>
              </li>
            ) : (
              <React.Fragment>
                <li>
                  <NavLink
                    className="nav_item"
                    to="/signin"
                    style={{ textDecoration: "none" }}
                  >
                    Login
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="nav_item"
                    to="/register"
                    style={{ textDecoration: "none" }}
                  >
                    Register
                  </NavLink>
                </li>
              </React.Fragment>
            )
          }
        </ul>
      </div>
    </header>
  );
};

export default NavBar;
