import React, { Component } from 'react';
import axios from 'axios';
import { Consumer } from '../Context.js';



// const URL = "https://musixmatchcom-musixmatch.p.rapidapi.com/wsr/1.1/apikey=";
class Search extends Component{
  state = {
    trackTitle: ''
  };
  
  findTrack = ( result, dispatch, e) => {
    e. preventDefault();
    const key = "8f375c461fb3c497746d61ebf2dd98b5";
    const URL = `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_track=${this.state.trackTitle}&page_size=10&page=1&s_track_rating=desc&apikey=${key}`;
    
    fetch(URL, {
      method:"GET"
    })
    .then(result =>{
      console.log(result);
      return result.json()
    },dispatch({
      type: "SEARCH_TRACKS",
      load: result.data.message.body.track_list
    })
    )
    .then(data => {
      this.setState({ trackTitle: '' });
      console.log(data);
    })
    .catch(err=> console.log(err))
  };
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-4 p-4">
              <h1 className="display-4 text-center">
                <i className="fas fa-music" /> Search For A Song
              </h1>
              <p className="lead text-center">Get the lyrics for any song</p>
              <form onSubmit={this.findTrack.bind(this, dispatch)}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Song title..."
                    name="trackTitle"
                    value={this.state.trackTitle}
                    onChange={this.onChange}
                  />
                </div>
                <button
                  className="btn btn-primary btn-lg btn-block mb-5"
                  type="submit"
                >
                  Get Track Lyrics
                </button>
              </form>
            </div>
          );
        }}
      </Consumer>
    );
  }

}




export default Search;
