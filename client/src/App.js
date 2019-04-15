import React ,{Component} from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Videos from "./components/Videos";
import Tracker from "./components/Tracker";
import Navbar from "./components/Navbar";
import Entertainment from "./components/Entertainment";
import SafetyTips from "./components/SafetyTips";
// import Scheduler from "./components/Scheduler";
import Login from "./components/Login";
import Signup from "./components/Signup";
class App extends Component {

  render(){
  return (
    <Router>
      <div>
      <Navbar/> 
      <Switch>
        <Route  path="/videos/:category" component={Videos} />
        <Route exact path="/tracker" component={Tracker} />
        <Route exact path="/entertainment" component={Entertainment} />
        {/* <Route exact path="/scheduler" component={Scheduler} /> */}
        <Route exact path="/safety" component={SafetyTips} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
      </Switch>
      </div>
       
    </Router>
  )
  }
}

export default App;
