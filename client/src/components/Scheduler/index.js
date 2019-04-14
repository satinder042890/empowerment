import React from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import { ApptList, ListItem } from "../ApptList";
import { Input, FormBtn } from "../ApptForm";
import API from "../utils/API";

export default class Scheduler extends React.Component {
  constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.state = {
      selectedDay: null,
    };
  }
  //add componentDidMount to call "load future appointments"
  // componentDidMount() {
  //   this.loadAppts();
  // }
  //function to load future appts
  // loadAppts = () => {
  //   API.getAppts()
  //     .then(res => 
  //       this.setState({})
  //       )
  //       .catch(err => console.log(err));
  // };
  //add function to delete appts
  handleDayClick(day, { selected }) {
    this.setState({
      selectedDay: selected ? undefined : day,
    });
  }

  //add a handleFormSubmit for new appointments
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
              <ListItem>  
              </ListItem>
            </ApptList>
          </div>
          <div className="col-sm-4">
            <p>
              {this.state.selectedDay ? this.state.selectedDay.toLocaleDateString() : 'Select a date'}
            </p>
            <Input />
            <FormBtn />
          </div>
          <div className="col-sm-2" />

        </div>


      </div>
    );
  }
}
