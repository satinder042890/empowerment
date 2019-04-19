import React,{Component} from "react";
import Navbar from "../Navbar";
class SafetyTips extends Component {
    render(){
        return (
            <div>
                <Navbar id={this.props.match.params.id}/>
            <h1>SafetyTips Page</h1>
            </div>
        )
    }
    
}

export default SafetyTips;