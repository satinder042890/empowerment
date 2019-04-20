import React,{Component} from "react";
import Navbar from "../Navbar";
class Home extends Component {
    state={
        id:1
      }
      componentDidMount =() =>{
        if(this.props.match.params.id){
          console.log(this.props.match.params.id)
        }
        else{
          console.log(this.state.id)
        }
        
      }
    render(){
        return (
      
            <Navbar id={this.props.match.params.id}/>
        
    )
    }  
    
}

export default Home;