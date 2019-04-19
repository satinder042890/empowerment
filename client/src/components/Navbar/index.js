import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import DropDown from "../DropDown";

class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark navbg">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="navbar-brand" href="/entertainment">Entertainment</a>
            </li>
            <li className="nav-item">
              <a className="navbar-brand" href="/scheduler">Scheduler</a>
            </li>
            <li className="nav-item">
              <a className="navbar-brand" href="/safety">Safety Tips</a>
            </li>
            <li className="nav-item">
              <a className="navbar-brand" href="/tracker">Tracker</a>
            </li>
            <li className="nav-item dropdown">
              <DropDown><a className="navbar-brand dropdown-toggle" href="#" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Videos</a></DropDown>
            </li>

          </ul>
          <form className="form-inline my-2 my-lg-0">
            <Link to="/login"><button className="btn btn-outline-light mr-sm-2" type="submit">Sign In</button></Link>
            <Link to="/signup"><button className="btn btn-outline-light my-2 my-sm-0" type="submit">Sign Up</button></Link>
          </form>
        </div>
      </nav>
    );
  }
}

export default Navbar;