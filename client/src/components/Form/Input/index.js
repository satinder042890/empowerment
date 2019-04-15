import React from "react";
const Input = (props) => {
    return (
        <div className="form-group">
            <label name={props.labelname}>{props.labelname}</label>
            <input type="text" className="form-control" placeholder={props.name} aria-label="Username" aria-describedby="basic-addon1" {...props} ></input>
        </div>
    )
}
export default Input;