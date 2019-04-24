import React from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import ApptList from "../ApptList";
import { Input, FormBtn } from "../ApptForm";
import DbAPI from "../../utils/DbAPI";
import Navbar from "../Navbar";
import { FutureAppt, FutureItems } from "../FutureAppt";
import DeleteBtn from "../DeleteBtn";


export default class Scheduler extends React.Component {
  constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.state = {
      appointments: [],
      selectedDay: null,
      title: "",
      apptType: "",
      // id: ""
    };
  }
  //add componentDidMount to call "load future appointments"
  componentDidMount() {
    this.loadAppts();
  }
  //function to load future appts
  loadAppts = () => {
    DbAPI.getAppts()
      .then(res => 
        this.setState({ appointments: res.data, title: "", date: "", apptType: "" })
        )
        .catch(err => console.log(err));
  };
  //add function to delete appts

  // Handles updating component state when the user types into the input field
  handleInputChange = event => {
  const { name, value } = event.target;
  this.setState({
    [name]: value
  });
};


  handleDayClick(day, { selected }) {
    this.setState({
      selectedDay: selected ? undefined : day,
    });
  }

  handleRadioButton(value) {
    this.setState({
      apptType: value
    });
  };

  //add a handleFormSubmit for new appointments

  handleFormSubmit = event => {
    event.preventDefault();
    // if(this.state.title && this.state.selectedDay && this.state.apptType) {
      console.log("clicked");
      DbAPI.saveAppt({
        title: this.state.title,
        date: this.state.selectedDay,
        apptType: this.state.apptType
        // _userId: this.props.match.params.id
      })
      .then(res => this.loadAppts())
      .then(console.log("submitted"))
      .catch(err => console.log(err));
    // }
  };

  deleteAppt = id => {
    DbAPI.deleteAppt(id)
      .then(res => this.loadAppts())
      .catch(err => console.log(err));
  };


  render() {
    return (
    <div>

      <Navbar id={this.props.match.params.id}/>

      <div className="container">
        <h1>Scheduler</h1>
        <div className="row" style={{display: 'flex', justifyContent: 'center' }}>
            <DayPicker
              selectedDays={this.state.selectedDay}
              onDayClick={this.handleDayClick}
              />
        </div>

        <div className="row">
        <div className="col-sm-2" />
          <div className="col-sm-4">
            <ApptList>
              {/* <ListItem 
                checked={this.state.apptType}
                onChange={this.handleInputChange}
              /> */}
              <div className="list-container">
                <li className = "list-group-item">
                    <div className = "row">
                        <div className = "col-sm-8">
                            <h5>Appointment</h5>
                        </div>
                        <div className = "col-sm-4">
                            <label className="btn btn-info list-btn">
                              <input 
                                type="radio" 
                                value="appointment"
                                checked={this.state.apptType === "appointment"}
                                onChange={() => this.handleRadioButton("appointment")}
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
                            <input 
                              type="radio"
                              value="reminder"
                              checked={this.state.apptType === "reminder"}
                              onChange={() => this.handleRadioButton("reminder")}
                              />
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
                            <input 
                              type="radio"
                              value="event"
                              checked={this.state.apptType === "event"}
                              onChange={() => this.handleRadioButton("event")}
                              />
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
                            <input 
                              type="radio" 
                              value="misc"
                              checked={this.state.apptType === "misc"}
                              onChange={() => this.handleRadioButton("misc")}
                              />
                          </label>
                        </div>
                    </div>
                </li>

              </div>

            </ApptList>
          </div>
          <div className="col-sm-4">
            <p>
              {this.state.selectedDay ? this.state.selectedDay.toLocaleDateString() : 'Select a date'}
            </p>
            <Input 
              value={this.state.title}
              onChange={this.handleInputChange}
              name="title"
              placeholder="Title"
              />
            <FormBtn 
              disabled={!(this.state.selectedDay && this.state.title)}
              onClick={this.handleFormSubmit}
              >
              Save
              </FormBtn>
          </div>
          <div className="col-sm-2" />

        </div>
      </div>
      <div className="container">
        <div className="row futureRow" style={{display: 'flex', justifyContent: 'center' }}>
          <h2>Upcoming Appointments</h2>
        </div>
        {this.state.appointments.length ? (
              <FutureAppt>
                {this.state.appointments.map(appointment => {
                  return (
                    <FutureItems 
                      key={appointment._id}
                      title={appointment.title}
                      apptType={appointment.apptType}
                      date={appointment.date}
                      >
                      <DeleteBtn onClick={() => this.deleteAppt(appointment._id)} />
                    </FutureItems>
                  );
                })}
              </FutureAppt>
            ) : (
              <h3>No Results to Display</h3>
            )}

      </div>
    
    
    
    
    
    
    
    
    
    </div>  


    );
  }
}