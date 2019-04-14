import React from "react";
const Button=(props)=>{
    return(
        <button type="button" className="btn btn-success" {...props}>{props.children}</button>
    )
}
export default Button;