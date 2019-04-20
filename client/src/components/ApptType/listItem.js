import React from 'react';
import "./style.css";

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
				            <input type="checkbox" 
                                checked={this.state.typeAppointment}
                                onChange={this.toggleChangeTypeA}
                            />
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
				            <input type="radio" name="options" id="reminder" />
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
				            <input type="checkbox" name="options" id="event"/>
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
				            <input type="radio" name="options" id="misc" />
				            <span className="fas fa-check"></span>
			            </label>
                    </div>
                </div>
            </li>

        </div>
    );
}
