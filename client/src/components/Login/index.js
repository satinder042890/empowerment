import React,{Component} from "react";
import Button from "../Form/Button";
import Input from "../Form/Input";
import Formgroup from "../Form/Formgroup";
import "./style.css";
import API from "../../utils/DbAPI";
class Login extends Component{
    state={
        Username:"",
        Password:""
    }
    handleChange= e =>{
        const { name, value } = e.target;
        this.setState({
          [name]: value
        });
    }
    handleSubmit = e =>{
        e.preventDefault();
        API.logIn({
            username: this.state.Username,
            password: this.state.Password
        }).then(res => {
            console.log(res)
        })
        .catch(err => console.log(err));
        this.setState({ Username: "", Password: ""});
        
    }
    render(){
    return(
    <Formgroup>
        <Input name="Username" labelname="Enter Username" value ={this.state.Username} onChange={this.handleChange}></Input><br></br>
        <Input name="Password" labelname="Enter Password" value ={this.state.Password} onChange={this.handleChange}></Input><br></br>
        <Button  onClick={this.handleSubmit}>Login</Button>
    </Formgroup>
    )
    }

}
export default Login;