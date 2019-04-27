import React from 'react';
import "./style.css";

export function FutureAppt({children}) {
    return(
        <div className="row" id="futureCont">
            <div className="list-container">
                <ul className="list-group">{children}</ul>
            </div>
        </div>
    );
}

export function FutureItems(props) {
    return(
        <li className="list-group-item" id="apptList" >
            <div className="row">
                <div className="titleCol">
                    <h5>Title: {props.title}</h5>
                </div>
                <div className="typeCol">
                    <h5>Type: {props.apptType}</h5>
                </div>
            </div>
            <div className="row">
                <p>{props.date}</p>
            </div>
        </li>
    )
}