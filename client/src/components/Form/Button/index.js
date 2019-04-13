import React from "react";
const Button=(props)=>{
    return(
        <button type="button" className="btn btn-success" id={props.id}>{props.children}</button>
    )
}
export default Button;