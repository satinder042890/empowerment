import React from "react";
const Navheadings = (props) => {
    return (
        
            <li className="nav-item">
                <a className="navbar-brand" href={props.href}>{props.heading}</a>
            </li>
       
    )
}
export default Navheadings;
