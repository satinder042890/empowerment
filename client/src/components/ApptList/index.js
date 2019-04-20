import React from 'react';
import "./style.css";

export function ApptList ({children}) {
    return (
        <div className="list-overflow-container">
            <ul className="list-group">{children}</ul>
        </div>
    );
}

export function ListItem() {
    return (
        <div className="list-container">
            <li className = "list-group-item">
                <div className = "row">
                    <div className = "col-sm-8">
                        <h5>Appointment</h5>
                    </div>
                    <div className = "col-sm-4">
                        <label className="btn btn-info list-btn">
				            <input type="radio" name="options" id="appointment" autocomplete="off" />
				            <span className="fas fa-check"></span>
			            </label>
                    </div>
                </div>
            </li>

            <li className = "list-group-item">
                <div className = "row">
                    <div className = "col-sm-8">
                        <h5>Reminder</h5>
                    </div>
                    <div className = "col-sm-4">
                        <label className="btn btn-warning list-btn">
				            <input type="radio" name="options" id="reminder" autocomplete="off" />
				            <span className="fas fa-check"></span>
			            </label>
                    </div>
                </div>
            </li>

            <li className = "list-group-item">
                <div className = "row">
                    <div className = "col-sm-8">
                        <h5>Event</h5>
                    </div>
                    <div className = "col-sm-4">
                        <label className="btn btn-success list-btn">
				            <input type="radio" name="options" id="event" autocomplete="off" />
				            <span className="fas fa-check"></span>
			            </label>
                    </div>
                </div>
            </li>

            <li className = "list-group-item">
                <div className = "row">
                    <div className = "col-sm-8">
                        <h5>Misc</h5>
                    </div>
                    <div className = "col-sm-4">
                        <label className="btn btn-danger list-btn">
				            <input type="radio" name="options" id="misc" autocomplete="off" />
				            <span className="fas fa-check"></span>
			            </label>
                    </div>
                </div>
            </li>

        </div>
    );
}