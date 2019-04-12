import React,{Component} from "react";
import Button from "../Form/Button";
import Input from "../Form/Input";
import Formgroup from "../Form/Formgroup";
import "./style.css";
class Login extends Component{
    render(){
    return(
    <Formgroup>
        <Input id="username" name="Username" labelname="Enter Username"></Input><br></br>
        <Input id="password" name="Password" labelname="Enter Password"></Input><br></br>
        <Button id="login">Login</Button>
    </Formgroup>
    )
    }

}
export default Login;