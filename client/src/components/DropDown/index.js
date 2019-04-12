import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";

import Videos from "../Videos";
class DropDown extends Component {
  state={
    category:"",
    videoList : ["Women Personal Safety", " Women Health", "Women Stress Relief"]

  }
  handleChange= (e)=>{
    // alert(e.target.name);
    this.setState({category:e.target.name});
   
  }
  render() {
   
    let optionItems = this.state.videoList.map((videos) =>
      <a className="dropdown-item" href={"/videos/" + this.state.category } name = {videos} onClick={this.handleChange}>{videos}</a>
    );
    
    return (
      // <Link to="/videos/"className={window.location.pat hname === "/videos"}>
      // <Link to={"/videos/" + "this.state.category"}>Hello</Link>
      <div className="dropdown">
        {this.props.children}
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          {optionItems}
        </div>
      </div> 
    )
  }
}

export default DropDown;
