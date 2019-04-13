import React,{Component} from "react";
import Button from "../Form/Button";
import Input from "../Form/Input";
import Formgroup from "../Form/Formgroup";
class Signup extends Component{
    render(){
    return(
    <Formgroup>
        <Input id="username" name="Username" labelname="Enter Username"></Input><br></br>
        <Input id="password" name="Password" labelname="Enter Password"></Input><br></br>
        <Input id="confirmPassword" name="confirm Password" labelname="Confirm Password"></Input><br></br>
        <Button id="signup">Sign Up</Button>
    </Formgroup>
    )
    }

}
export default Signup;