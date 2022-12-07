import React, { Component } from "react";
import { Link } from "react-router-dom";
import ProfileLogo from "../images/profile-logo.png"

class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
          <div className="container-fluid">
            <Link to="/" className="navbar-brand">
              Social App
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#mynavbar"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="mynavbar">
              <ul className="navbar-nav me-auto">
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                <Link to="/photos" className="nav-link">
                    Photos
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link">
                    Link
                  </a>
                </li>
              </ul>
              <form className="d-flex">
               <img src={ProfileLogo} height="40" width="40" style={{borderRadius:"20px"}}/>
               
              </form>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
