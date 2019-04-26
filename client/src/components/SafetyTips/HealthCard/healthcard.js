import React from "react";
import "./style.css"
import Formgroup from "../../Form/Formgroup";
const DoctorCard = (props) => {
  
return (
  // <div className="Container">
//  <Formgroup>
   <div className="container" id ="mainDisplaySection">
       <div className="row align-items-center">
           <div className="col-12 col-md-3">
           <img src={props.pic}/>
            </div>
            <div className="col-12 col-md-9">
               <h4 className="title">{props.fname +" "+props.lname+"    "+props.spec}</h4>
               {/* <p>{props.spec}</p> */}
               <p>{props.business}</p>
               <p>{props.address}</p>
               <p>{props.number}</p>
            </div>
        </div>
    </div>
    // <h5>{props.fname}</h5>
    // <h5>{props.lname}</h5>
    // <img src={props.pic}/>
    // <p>{props.spec}</p>
    // <p>{props.business}</p>
    // <p>{props.address}</p>
    // <p>{props.number}</p>
    // </Formgroup>
  // </div>
)}

export default DoctorCard;