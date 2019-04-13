import React from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import { ApptList, ListItem } from "./components/ApptList";
import { Input, FormBtn } from "./components/ApptForm";

export default class Scheduler extends React.Component {
  constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.state = {
      selectedDay: null,
    };
  }
  handleDayClick(day, { selected }) {
    this.setState({
      selectedDay: selected ? undefined : day,
    });
  }
  render() {
    return (
        <h1>Scheduler</h1>
      <div className="container">
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
