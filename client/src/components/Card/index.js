import React from "react";
import "./style.css";

const Card =(props) =>{
  let url="https://www.youtube.com/embed/" + props.id;
  return(
    <div className="container" id ="mainDisplaySection">
       <div className="row align-items-center">
           <div className="col-12 col-md-3">
               <iframe  src={url} frameborder="0" title ={props.title} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div className="col-12 col-md-9">
               <h4 className="title">{props.title}</h4>
               <p>{props.desc}</p>
            </div>
        </div>
    </div>
  )

}


export default Card;