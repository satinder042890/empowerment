import React ,{Component} from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Videos from "./components/Videos";
import Tracker from "./components/Tracker";
// import Navbar from "./components/Navbar";
import Entertainment from "./components/Entertainment";
import SafetyTips from "./components/SafetyTips";
import Scheduler from "./components/Scheduler";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import Landingpage from "./components/Landingpage";
class App extends Component {
    
  render(){
    
  return (
    <Router>
      <div>
      {/* <Navbar/>  */}
      <Switch>
        <Route exact path="/" component={Landingpage} />
        <Route  path="/videos/:category/:id" component={Videos} />
        <Route exact path="/tracker/:id" component={Tracker} />
        <Route exact path="/entertainment/:id" component={Entertainment} />
        <Route exact path="/scheduler/:id" component={Scheduler} />
        <Route exact path="/safety/:id" component={SafetyTips} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/home/:id" component={Home} />
      </Switch>
      </div>
       
    </Router>
  )
  }
}

export default App;
