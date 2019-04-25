import React,{Component} from "react";
import Navbar from "../Navbar";
import API from "../../utils/DbAPI";
import Button from "../Form/Button";
import Formgroup from "../Form/Formgroup";
import Input from "../Form/Input";
class Tracker extends Component{
    state={
        street:"",
        city:"",
        state:"",
        country:"",
        zipcode:"",
        number:"",
        message:"",
        address:""

    }
    handleChange = e => {
      const { name, value } = e.target;
      this.setState({
          [name]: value
      });
  }
    showPosition=(position)=> {
        console.log("Latitude: " + position.coords.latitude); 
        console.log("Longitude: " + position.coords.longitude);
        this.getAddress(position.coords.latitude,position.coords.longitude);
      }

      sendMessage =(number,message,address) =>{
        console.log("sendmessage function data")
        console.log(number);
        message+=" at "+address
          // console.log(message + address);
           console.log(message);

          API.sendText(number,message).then(function(res){
            console.log(res);
          })
      }

       getAddress= async(lat,lng)=>{
        var address="",number =0 ,message="";
        await API.getAddress(lat,lng).then(function(res){
        
        const data=res.data.results[0].locations[0];
        address=data.street+" , "+data.adminArea5+" , "+data.adminArea3+" , "+data.adminArea1+" , "+data.postalCode;
      //  console.log(address);         
        })
        await API.getContact(this.props.match.params.id).then(function(res){
         
          number=res.data.number;
          message=res.data.message;
          // console.log(number);
          // console.log(message)
         
        })
        await this.sendMessage(number,message,address);
      }

      
      getLocation=() =>{
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(this.showPosition);
        } else { 
          console.log("Geolocation is not supported by this browser.");
        }
      }

        saveNumber = e => {
        e.preventDefault();
        console.log(this.state.number);
        API.saveContact(this.props.match.params.id,{
           number:this.state.number,
           message:this.state.message
        }).then(res => {
            console.log(res)
            this.setState({ number: "", message: "" });
        }).catch(err => console.log(err));

            
    }
    render(){
        return (
            <div>
            <Navbar id={this.props.match.params.id}/>
            <Formgroup>
              <Input name="number" labelname="Enter Number with code" value={this.state.number} onChange={this.handleChange}></Input>
              <Input name="message" labelname="Enter Message" value={this.state.message} onChange={this.handleChange}></Input>
              <Button onClick={this.saveNumber}>Save Number</Button>
            </Formgroup>
            <Formgroup>
            <h3>Click danger button for help</h3>
            <Button onClick={this.getLocation}>Danger</Button>
            </Formgroup>
            </div>
        )
    }
    
}

export default Tracker;