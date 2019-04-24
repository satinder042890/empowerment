import React, {Component} from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Header from "./Header/Header.js";
import Musix from "./Musix.js";
import Lyrics from './Lyrics/Lyrics.js';
import { Provider } from './Context.js';
import Navbar from "../Navbar";

class Entertainment extends Component {
    render() {
        return (
            <div>
            <Navbar id={this.props.match.params.id}/>
            <Provider>
                <Router>
                    <React.Fragment>
                        <div className="container">
                            <Switch>
                                <Route path="/entertainment" component={Musix} />
                                <Route exact path="/lyrics/track/:id" component={Lyrics} />
                            </Switch>
                        </div>
                    </React.Fragment>
                </Router>
            </Provider>
            </div>
        )
    }
}

export default Entertainment;