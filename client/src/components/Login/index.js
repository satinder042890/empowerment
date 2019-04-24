import React,{Component} from "react";
import Button from "../Form/Button";
import Input from "../Form/Input";
import Formgroup from "../Form/Formgroup";
import "./style.css";
import API from "../../utils/DbAPI";
import Navbar from "../Navbar";
import Rodal from 'rodal';

// include styles
import 'rodal/lib/rodal.css';
class Login extends Component{
    state={
        Username:"",
        Password:"",
        visibility:false
    }
    handleChange= e =>{
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
    handleSubmit = e =>{
        e.preventDefault();
        API.logIn({
            username: this.state.Username,
            password: this.state.Password
        }).then(res => {
            console.log(res.data._id)
            this.props.history.push('/home/'+res.data._id);
        })
        .catch(err => {
            console.log(err)
            this.show();
        });
        this.setState({ Username: "", Password: ""});
        
    }
    render(){
    return(
        <div>
<Navbar id="1"/>
    <Formgroup>
        <Input type="text" name="Username" labelname="Enter Username" value ={this.state.Username} onChange={this.handleChange}></Input><br></br>
        <Input type="password" name="Password" labelname="Enter Password" value ={this.state.Password} onChange={this.handleChange}></Input><br></br>
        <Button  onClick={this.handleSubmit}>Login</Button>
    </Formgroup>
    <Rodal visible={this.state.visibility} onClose={this.hide} showCloseButton={true} duration={1000} animation={this.state.type}>
                    <h4>Invalid Username Or Password</h4>
                    <br></br>
                    <img id="invalidLogo" src="data:image/png;base64,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"/>
                </Rodal>
        </div>
        
    )
    }

}
export default Login;