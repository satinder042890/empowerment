import React from "react";
const Input = (props) => {
    return (
        <div className="form-group">
            <label for={props.labelname}>{props.labelname}</label>
            <input type="text" className="form-control" placeholder={props.name} aria-label="Username" aria-describedby="basic-addon1" id={props.id}></input>
        </div>
    )
}
export default Input;