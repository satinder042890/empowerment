import React,{Component} from "react";
import { Link } from "react-router-dom";
import "./style.css";
import DropDown from "../DropDown";

class Navbar extends Component{
  
    render(){
    return(
        <nav className="navbar navbar-expand-lg navbar-dark navbg">
 
  
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
    <li className="nav-item">
    <Link to="/entertainment" className={window.location.pathname === "/entertainment"}><a className="navbar-brand" href="#">Entertainment</a>
    </Link></li>
    <li className="nav-item">
    <Link to="/scheduler" className={window.location.pathname === "/scheduler"}><a className="navbar-brand" href="#">Scheduler</a>
      </Link></li>
      <li className="nav-item">
      <Link to="/safety" className={window.location.pathname === "/safety"}><a className="navbar-brand" href="#">Safety Tips</a>
      </Link></li>
      <li className="nav-item">
      <Link to="/tracker" className={window.location.pathname === "/tracker"}><a className="navbar-brand" href="#">Tracker</a>
      </Link></li>
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