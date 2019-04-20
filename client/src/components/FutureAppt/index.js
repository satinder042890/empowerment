import React from 'react';
import "./style.css";

export function FutureAppt({children}) {
    return(
        <div className="row">
            <div className="col-sm-2" />
            <div className="col-sm-8">
                <ul className="list-group">{children}</ul>
            </div>
            <div className="col-sm-2" />
        </div>
    );
}

export function FutureItems(props) {
    return(
        <li className="list-group-item">

        </li>
    )
}