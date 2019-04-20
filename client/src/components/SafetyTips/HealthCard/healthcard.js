import React from "react";
import "./style.css"

const DoctorCard = (props) => {
  
return (
  <div className="mainContainer">
    <h5>{props.fname}</h5>
    <h5>{props.lname}</h5>
    <img src={props.pic}/>
    <p>{props.spec}</p>
    <p>{props.business}</p>
    <p>{props.address}</p>
    <p>{props.number}</p>
  </div>
)}

export default DoctorCard;