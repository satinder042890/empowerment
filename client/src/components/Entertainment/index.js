import React,{Component} from "react";
import Navbar from "../Navbar";
class Entertainment extends Component {
    render(){
    return (
        <div>
            <Navbar id={this.props.match.params.id}/>
<h1>Entertainment Page</h1>
        </div>
        
    )
    }
}

export default Entertainment;