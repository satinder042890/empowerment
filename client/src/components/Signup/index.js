import React, { Component } from "react";
import Button from "../Form/Button";
import Input from "../Form/Input";
import Formgroup from "../Form/Formgroup";
import API from "../../utils/DbAPI";
import Navbar from "../Navbar";
class Signup extends Component {
    state = {
        Username: "",
        Password: "",
        confirmPassword: "",
        signup: false
    }
    handleChange = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }
    handleSubmit = e => {
        e.preventDefault();
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
    render() {

        return (
            <div>
                <Navbar id="1"/>
            <Formgroup>
                <Input name="Username" labelname="Enter Username" value={this.state.Username} onChange={this.handleChange}></Input><br></br>
                <Input name="Password" labelname="Enter Password" value={this.state.Password} onChange={this.handleChange}></Input><br></br>
                <Input name="confirmPassword" labelname="Confirm Password" value={this.state.confirmPassword} onChange={this.handleChange}></Input><br></br>
                <Button onClick={this.handleSubmit}>Sign Up</Button>
            </Formgroup>
            </div>
        )
    }

}
export default Signup;