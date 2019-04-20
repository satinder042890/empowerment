import React, {Component} from 'react';
import axios from 'axios';

const Context = React.createContext();

const key = "8f375c461fb3c497746d61ebf2dd98b5";

const reducer = (state, action) => {
    switch (action.type) {
        case 'SEARCH_TRACKS':
            return {
                ...state,
                track_list: action.payload,
                heading: 'Search Results'
            };
        default:
            return state;
    }
};


export class Provider extends Component {
    state = {
        track_list: [],
        heading: 'Top 10 Tracks',
        dispatch: action => this.setState(state => reducer(state, action))
    };

    componentDidMount() {
       
        const URL= "https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/chart.tracks.get?page=1&page_size=10&country=us&f_has_lyrics=1&apikey=" + key ;
        fetch(URL, {
            method: "GET" 
        }).then(result =>{
            console.log(result);
            return result.json()})
        .then(data=> {
            console.log(data.message.body.track_list);
            this.setState({track_list: data.message.body.track_list}, ()=> {console.log(this.state.track_list)});
        })

    }

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        );
    }
}


export const Consumer = Context.Consumer;