
import React, { Component } from 'react';
import { Consumer } from '../Context.js';
import SongCard from "../SongCard/SongCard.js"; 
import Loading from "./Loading.js";

export class Songs  extends Component{


render(){
    return(
        <Consumer>
        {value => {
          const { track_list, heading } = value;

          if (track_list === undefined || track_list.length === 0) {
            return <Loading />;
          } else {
            return (
              <React.Fragment>
                <h3 className="text-center mb-4">{heading}</h3>
                <div className="row">
                  {track_list.map(item => (
                    <SongCard key={item.track.track_id} track={item.track} />
                  ))}
                </div>
              </React.Fragment>
            );
          }
        }}
      </Consumer>
    )
}
}
export default Songs; 