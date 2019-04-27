import React, {Component} from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Header from "./Header/Header.js";
import Musix from "./Musix.js";
import Lyrics from './Lyrics/Lyrics.js';
import { Provider } from './Context.js';


class Entertainment extends Component {
    render() {
        return (
            <Provider>
                <Router>
                    <React.Fragment>
                        <div className="container">
                            <Switch>
                                <Route path="/entertainment" component={Musix} />
                                <Route path="/lyrics/track/:id" component={Lyrics} />
                            </Switch>
                        </div>
                    </React.Fragment>
                </Router>
            </Provider>
      )
    }
}

export default Entertainment;