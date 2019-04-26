import React, { Component } from "react";
// import HealthAPI from "../../utils/HealthApi";
import Formgroup from "../Form/Formgroup";
import getDoctors from "../../utils/HealthApi";
import DoctorCard from "./HealthCard/healthcard";
import Navbar from "../Navbar";
import Input from "../Form/Input";
import Button from "../Form/Button";
class Health extends Component {
  state= {
    firstname: "",
    lastname: "", 
    specialty: "",
    zipcode: "",
    doctors : [],
    
  };

  


  render() {


    return (
        
      <div>
        <Navbar id={this.props.match.params.id}/>
        <Formgroup>
        <Input type="text" name="First Name" labelname="First Name" value= {this.state.firstname} onChange= {x => this.updateFirstName(x)}></Input>
          {/* <input type="text" placeholder="First Name" value ={this.state.firstname} onChange= {x => this.updateFirstName(x)} /> */}

          <br></br>
          <Input type="text" name="Last Name" labelname="Last Name" value= {this.state.lastname} onChange= {a => this.updateLastName(a)}></Input>
          {/* <input type="text" placeholder="Last Name" value={this.state.lastname} onChange= {a => this.updateLastName(a)} /> */}

          <br></br>

          <div class="input-group mb-3">
          {/* <div class="input-group-prepend">
            <label class="input-group-text" for="inputGroupSelect01">Specialties</label>
          </div> */}
        <select class="custom-select" id="inputGroupSelect01" value={this.state.specialty} onChange= {b => this.updateSpecialty(b)}>
          <option selected>Specialties...</option>
          <option value="massage-therapy">Massage Therapy</option>
          <option value="dentist">Dentist</option>
          <option value="3">Three</option>
        </select>
        </div>
          
          {/* <input type="text" placeholder="Specialty" value={this.state.specialty.toLowerCase()} onChange= {b => this.updateSpecialty(b)} /> */}
        
          
          <br></br>
          <Input type="text" name="State or Zipcode" labelname="State or Zipcode" value= {this.state.zipcode}  onChange= {c => this.updateZipcode(c)}></Input>
          {/* <input type="text" placeholder="State or Zipcode" value={this.state.zipcode} onChange= {c => this.updateZipcode(c)} /> */}

          <br></br>
          <Button onClick={this.handleclick}>Search</Button>
        {/* <button onClick={this.handleclick}>Search</button> */}
           </Formgroup>
           <Formgroup>
             <h1 className="text-center">Results</h1>
             <hr></hr>
        {this.state.doctors.length > 0 ?  this.state.doctors.map(doctor => <DoctorCard 
          fname={doctor.profile.first_name}
          lname={doctor.profile.last_name}
          pic={doctor.profile.image_url}
          spec={doctor.specialties[0].name}
          business={doctor.practices.length == 0 ?
            "NONE" : doctor.practices[0].name}
          address={doctor.practices.length == 0 ? 
            null :doctor.practices[0].visit_address.street + ", " +
             doctor.practices[0].visit_address.city + ", " + 
             doctor.practices[0].visit_address.state + " " + 
             doctor.practices[0].visit_address.zip}
          number={doctor.practices.length == 0 ? 
            "NONE" : doctor.practices[0].phones[0].number}

        />) : <h3>Search with correct Information</h3>}
        </Formgroup>
        {/* <table> */}
        
          {/* {this.state.doctors.map(doctor => {
            return <div key={doctor.fname}>{doctor.profile.first_name}</div>
           } )}
           
           {this.state.doctors.map(doctor => {
            return <div key={doctor.lname}>{doctor.profile.last_name}</div>
           } )}

          {this.state.doctors.map(doctor => {
            return <img key={doctor.pic} src={doctor.profile.image_url}></img>
           } )}

          {this.state.doctors.map(doctor => {
            return <div key={doctor.spec}>{doctor.specialties[0].name}</div>
           } )}

          {this.state.doctors.map(doctor => {
             return <div key={doctor.business}>{doctor.practices.length == 0 ? 
                "NONE" : doctor.practices[0].name}
                </div>
            } ) }

          {this.state.doctors.map(doctor => {
             return <div key={doctor.address}>{doctor.practices.length == 0 ? 
                null :doctor.practices[0].visit_address.street +", " + doctor.practices[0].visit_address.city + ", " + doctor.practices[0].visit_address.state + " " + doctor.practices[0].visit_address.zip}
                </div>
            } ) }

          {this.state.doctors.map(doctor => {
             return <div key={doctor.number}>{doctor.practices.length == 0 ? 
                "NONE" : doctor.practices[0].phones[0].number}
                </div>
            } ) } */}

          
        {/* </table> */}


      </div>
     
   )
  }

  updateFirstName = (x) => this.setState({firstname:x.target.value})
  updateLastName = (a) => this.setState({lastname:a.target.value})
  updateSpecialty = (b) => this.setState({specialty:b.target.value})
  updateZipcode = (c) => this.setState({zipcode:c.target.value})

  handleclick = async (e) => {
    // console.log(this.state.specialty)
    //provide dropdown for specialty and make it lowercase
    const res = await getDoctors(this.state.specialty, this.state.zipcode, this.state.firstname, this.state.lastname);
    //HealthAPI.get("/")
    
  this.setState({doctors:res.data.data});
  console.log(this.state.doctors);
  this.setState({firstname:"" , lastname:"" ,  zipcode:""})

    
  }

}

export default Health;