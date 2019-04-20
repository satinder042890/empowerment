import React from "react";
import "./style.css";
const Formgroup=(props)=>{
    return(
        <form className="formstyle">
        
         {props.children}
       
      </form>
    )
}
export default Formgroup;
