import React from "react";

export default function Place(props) {
  return (
    <div className="place-cont">
      <div className="img-cont">
        <img src={props.img} />
      </div>
      <div className="text-cont">
        <span className="location">
          <span className="contry">
            <img src="https://cdn-icons-png.flaticon.com/512/2776/2776067.png" />
            <p>{props.country}</p>
          </span>
          <a target="_blank" href={props.link}>View on Google Maps</a>
        </span>
        <h1>{props.title}</h1>
        <div className="date">
          <h3>{props.date.start}</h3>
          {props.date.end && 
            <div className="conditional">
              <h3> - </h3>
              <h3>{props.date.end}</h3>
            </div>
          }
        </div>
        <p>{props.desc}</p>
      </div>
    </div>
  )
}