import React, { Component } from "react";

import "./style.css";


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
      <a className="dropdown-item" href={"/videos/" + this.state.category+"/"+this.props.id } name = {videos} onClick={this.handleChange}>{videos}</a>
    );
    
    return (
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
