import React from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import { ApptList, ListItem } from "../ApptList";
import { Input, FormBtn } from "../ApptForm";
import DbAPI from "../../utils/DbAPI";

export default class Scheduler extends React.Component {
  constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.state = {
      selectedDay: null,
      title: "",
      apptType: ""
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
        this.setState({})
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


  //add a handleFormSubmit for new appointments

  handleFormSubmit = event => {
    event.preventDefault();
    if(this.state.title && this.state.selectedDay && this.state.apptType) {
      DbAPI.saveAppt({
        title: this.state.title,
        date: this.state.selectedDay,
        apptType: this.state.apptType
      })
      .then(res => this.loadAppts())
      .catch(err => console.log(err));
    }
  };

  render() {
    return (
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
              <ListItem 
                value={this.state.apptType}
                onChange={this.handleInputChange}
              />
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
            />
          </div>
          <div className="col-sm-2" />

        </div>


      </div>
    );
  }
}