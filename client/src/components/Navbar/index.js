import React,{Component} from "react";
import { Link } from "react-router-dom";
import "./style.css";
import DropDown from "../DropDown";
import Navheadings from "../Navheadings"
class Navbar extends Component{
  
    render(){
    return(
     
        <nav className="navbar navbar-expand-lg navbar-dark navbg">
 
  {this.props.id === "1" ?
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
  
  <ul className="navbar-nav mr-auto">
   
    <Navheadings href={"/entertainment/"+this.props.id} heading="Entertainment"></Navheadings>
    <Navheadings href={"/safety/"+this.props.id} heading="Safety"></Navheadings>
    
   
      <li className="nav-item dropdown">
      <DropDown id={this.props.id}><a className="navbar-brand dropdown-toggle" href="#" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Videos</a></DropDown>
     </li>
     </ul>
    
    <form className="form-inline my-2 my-lg-0"> 
    <Link to="/login"><button className="btn btn-outline-light mr-sm-2" type="submit">Sign In</button></Link>
    <Link to="/signup"><button className="btn btn-outline-light my-2 my-sm-0" type="submit">Sign Up</button></Link>
    </form>
   
  </div>
  : <div className="collapse navbar-collapse" id="navbarSupportedContent">
  
  <ul className="navbar-nav mr-auto">
   
    <Navheadings href={"/entertainment/"+this.props.id} heading="Entertainment"></Navheadings>
    <Navheadings href={"/safety/"+this.props.id} heading="Safety"></Navheadings>
    <Navheadings href={"/scheduler/"+this.props.id} heading="Scheduler"></Navheadings>
    <Navheadings href={"/tracker/"+this.props.id} heading="Tracker"></Navheadings>
   
      <li className="nav-item dropdown">
      <DropDown id={this.props.id}><a className="navbar-brand dropdown-toggle" href="#" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Videos</a></DropDown>
     </li>
     </ul>
    
    <form className="form-inline my-2 my-lg-0"> 
    <Link to="/"><button className="btn btn-outline-light mr-sm-2" type="submit">Logout</button></Link>
    </form>
   
  </div>}
</nav>
    );
    }
}

export default Navbar;