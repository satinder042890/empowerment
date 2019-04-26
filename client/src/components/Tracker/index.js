import React, { Component } from "react";
import Navbar from "../Navbar";
import API from "../../utils/DbAPI";
import Button from "../Form/Button";
import Formgroup from "../Form/Formgroup";
import Input from "../Form/Input";
import Rodal from 'rodal';

// include styles
import 'rodal/lib/rodal.css';
import "./style.css";
class Tracker extends Component {
  state = {
    street: "",
    city: "",
    state: "",
    country: "",
    zipcode: "",
    number: "",
    message: "",
    address: "",
    visibility: false,
    newdetails: false,
    changedetails: false,
    track: false

  }
  show = () => {
    this.setState({ visibility: true })
  }
  hide = () => {
    this.setState({ visibility: false })
  }
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }
  showPosition = (position) => {
    console.log("Latitude: " + position.coords.latitude);
    console.log("Longitude: " + position.coords.longitude);
    this.getAddress(position.coords.latitude, position.coords.longitude);
  }

  sendMessage = (number, message, address) => {
    console.log("sendmessage function data")
    console.log(number);
    message += " at " + address
    // console.log(message + address);
    console.log(message);

    API.sendText(number, message).then(function (res) {
      console.log(res);
    })
  }

  getAddress = async (lat, lng) => {
    var address = "", number = 0, message = "";
    await API.getAddress(lat, lng).then(function (res) {

      const data = res.data.results[0].locations[0];
      address = data.street + " , " + data.adminArea5 + " , " + data.adminArea3 + " , " + data.adminArea1 + " , " + data.postalCode;
      //  console.log(address);         
    })
    await API.getContact(this.props.match.params.id).then(function (res) {

      number = res.data.number;
      message = res.data.message;
      // console.log(number);
      // console.log(message)

    })
    await this.sendMessage(number, message, address);
  }


  getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition);
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }

  addDetail = () => {
    this.setState({ newdetails: true, changedetails: false, track: false })
  }

  updateDetail = () => {
    this.setState({ newdetails: false, changedetails: true, track: false })
  }

  sendDetail = () => {
    this.setState({ newdetails: false, changedetails: false, track: true })
  }
  componentDidMount = () => {
    this.show();
  }
  saveNumber = e => {
    e.preventDefault();
    console.log(this.state.number);
    API.saveContact(this.props.match.params.id, {
      number: this.state.number,
      message: this.state.message
    }).then(res => {
      console.log(res)
      this.setState({ number: "", message: "" });
    }).catch(err => console.log(err));
  }

  updateNumber = e => {
    e.preventDefault();
    console.log(this.state.number);
    API.updateContact(this.props.match.params.id, {
      number: this.state.number,
      message: this.state.message
    }).then(res => {
      console.log(res)
      this.setState({ number: "", message: "" });
    }).catch(err => console.log(err));


  }
  render() {
    return (
      <div>
        <Navbar id={this.props.match.params.id} />
        <ul className="list-inline text-center list">
          <li className="list-inline-item first" onClick={this.addDetail}>Enter Details</li>
          <li className="list-inline-item" onClick={this.updateDetail}>Update Details</li>
          <li className="list-inline-item" onClick={this.sendDetail}>Feeling Unsafe</li>
        </ul>
        {this.state.newdetails ?
          <Formgroup>
            <Input type="text" name="number" labelname="Enter Number with code" value={this.state.number} onChange={this.handleChange}></Input>
            <Input type="text" name="message" labelname="Enter Message" value={this.state.message} onChange={this.handleChange}></Input>
            <Button onClick={this.saveNumber}>Save Number</Button>
          </Formgroup>
          : this.state.changedetails ?
            <Formgroup>
              <Input type="text" name="number" labelname="Enter Number with code" value={this.state.number} onChange={this.handleChange}></Input>
              <Input type="text" name="message" labelname="Enter Message" value={this.state.message} onChange={this.handleChange}></Input>
              <Button onClick={this.updateNumber}>Update Number</Button>
            </Formgroup>
            : this.state.track ?
              <Formgroup>
                <h3>Click danger button for help</h3>
                <Button onClick={this.getLocation}>Danger</Button>
              </Formgroup>
              : <Rodal visible={this.state.visibility} height={300} onClose={this.hide} showCloseButton={true} duration={1000} animation={this.state.type}>
                <h4>Select Option</h4>
                <br></br>
                <h6>If you are a new user Click on add Details to save your information</h6><br></br>
                <h6>If you want to update your information then click on Update Details</h6><br></br>
                <h6>If you are not feeling safe then click on Feeling Unsafe</h6>
              </Rodal>
        }
      </div>
    )
  }

}

export default Tracker;