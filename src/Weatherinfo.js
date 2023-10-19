import React from "react";
import FormattedDate from "./FormattedDate";
import "./Weather.css";

export default function Weatherinfo(props) {
  return (
    <div className="weatherinfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row">
        <div className="col-6 ">
          <img
            src={props.data.iconUrl}
            alt={props.data.description}
            className="current-temp"
          />

          <div className="current-temp">
            <span className="temperature">
              {Math.round(props.data.temperature)}
            </span>
            <span className="degree">°C</span>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li></li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
