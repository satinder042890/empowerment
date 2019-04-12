import React, { Component } from "react";
import API from "../../utils/API";
import Card from "../Card";
class Videos extends Component {
  state = {
    result: [],
   
  }
  handleChange = async (e) => {
    
    console.log(e)
    const res = await API.get("/search", {
      params: {
        q: e
      }
    })
    console.log(res.data);
    this.setState({ result: res.data.items })
    console.log(this.state.result)
  
  
  }
  componentDidMount(){
    console.log(this.props.match.params.category)
    this.handleChange(this.props.match.params.category);
  }
  
  render() {
    

    return (
    <div>
      {this.state.result.map(item =>
        
        <Card
        id={item.id.videoId} 
        title={item.snippet.title}
        desc={item.snippet.description.substring(0,200)}
        ></Card>
        )}
      
     </div>

    
    )
  }
}
export default Videos;