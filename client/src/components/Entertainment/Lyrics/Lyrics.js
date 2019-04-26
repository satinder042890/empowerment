import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Loading from '../Songs/Loading.js';
// import Moment from 'react-moment';

const key = "8f375c461fb3c497746d61ebf2dd98b5";

class Lyrics extends Component {
  state = {
    track: {},
    lyrics: {}
  };
  componentDidMount() {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${
          this.props.match.params.id
        }&apikey=${key}`
      )
      .then(res => {
        this.setState({ lyrics: res.data.message.body.lyrics });

        return axios.get(
          `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.get?track_id=${
            this.props.match.params.id
          }&apikey=${key}`
        );
      })
      .then(res => {
        this.setState({ track: res.data.message.body.track });
      })
      .catch(err => console.log(err));
  }

  // componentDidMount() {
  //   URL = `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${
  //     this.props.match.params.id
  //   }&apikey=${key}`;

  //   fetch(URL,{
  //         method: "GET"
  //       }
  //     )
  //     .then(res => {
  //       this.setState({ lyrics: res.data.message.body.lyrics });
  //       console.log("lyrics" + { lyrics: res.data.message.body.lyrics });

  //      fetch(
  //         `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.get?track_id=${
  //           this.props.match.params.id
  //         }&apikey=${key}`, {
  //           method: "GET"
  //         }
  //       );
  //     })
  //     .then(res => {
  //       this.setState({ track: res.data.message.body.track });
  //       console.log("track" + {track: res.data.message.body.track });
  //     })
  //     .catch(err => console.log(err));
  // }

  render() {
    const { track, lyrics } = this.state;

    if (
      track === undefined ||
      lyrics === undefined ||
      Object.keys(track).length === 0 ||
      Object.keys(lyrics).length === 0
    ) {
      return <Loading />;
    } else {
      return (
        <React.Fragment>
          <Link to="/" className="btn btn-dark btn-sm mb-4">
            Go Back
          </Link>
          <div className="card">
            <h5 className="card-header">
              {track.track_name} by{' '}
              <span className="text-secondary">{track.artist_name}</span>
            </h5>
            <div className="card-body">
              <p className="card-text">{lyrics.lyrics_body}</p>
            </div>
          </div>

          <ul className="list-group mt-3">
            <li className="list-group-item">
              <strong>Album ID</strong>: {track.album_id}
            </li>
            <li className="list-group-item">
              <strong>Song Genre</strong>:{' '}
             { track.primary_genres.music_genre_list.length === 0 ? 'NO GENRE AVAILABLE' : track.primary_genres.music_genre_list[0].music_genre.music_genre_name }
            </li>
            <li className="list-group-item">
              <strong>Explicit Words</strong>:{' '}
              {track.explicit === 0 ? 'No' : 'Yes'}
            </li>
            {/* <li className="list-group-item">
              <strong>Release Date</strong>:{' '}
              <Moment format="MM/DD/YYYY">{track.first_release_date}</Moment>
            </li> */}
          </ul>
        </React.Fragment>
      );
    }
  }
}

export default Lyrics;
