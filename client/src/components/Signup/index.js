import React, { Component } from "react";
import Button from "../Form/Button";
import Input from "../Form/Input";
import Formgroup from "../Form/Formgroup";
import API from "../../utils/DbAPI";
import Navbar from "../Navbar";
import Rodal from 'rodal';

// include styles
import 'rodal/lib/rodal.css';
class Signup extends Component {
    state = {
        Username: "",
        Password: "",
        confirmPassword: "",
        signup: false,
        visibility:false,
        type:"door"
    }
    handleChange = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }
    show =()=>{
        this.setState({visibility:true})
    }
    hide=()=>{
        this.setState({visibility:false})
    }
    handleSubmit = e => {
        e.preventDefault();
        if((this.state.Password !== this.state.confirmPassword) || ((this.state.Username).length < 6) || ((this.state.Password).length < 8)){
            this.show();
        }
       else{
        API.saveUser({
            username: this.state.Username,
            password: this.state.Password
        }).then(res => {
            console.log(res)
            this.setState({ Username: "", Password: "", confirmPassword: "", signup: true });
            if(!this.state.signup){
                console.log(this.state.signup);
               
            }
            else{
                this.props.history.push('/login');
            }
        })
            .catch(err => console.log(err));
    }
            
    }
    render() {

        return (
            <div>
                <Navbar id="1"/>
            <Formgroup>
                <Input type="text" name="Username" labelname="Enter Username" value={this.state.Username} onChange={this.handleChange}></Input><br></br>
                <Input type="password" name="Password" labelname="Enter Password" value={this.state.Password} onChange={this.handleChange}></Input><br></br>
                <Input type="password" name="confirmPassword" labelname="Confirm Password" value={this.state.confirmPassword} onChange={this.handleChange}></Input><br></br>
                <Button onClick={this.handleSubmit}>Sign Up</Button>
            </Formgroup>
            <Rodal visible={this.state.visibility} onClose={this.hide} showCloseButton={true} duration={1000} animation={this.state.type}>
                    <h4>Invalid Credentials</h4>
                    <br></br>
                    <h6>Username should be of minimun 6 characters</h6>
                    <h6>Password should be of minimum 8 characters</h6>
                    <h6>Password and Confirm password should be matched with each other</h6>
                </Rodal>
            </div>
        )
    }

}
export default Signup;