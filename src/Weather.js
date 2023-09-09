import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city"
              className="form-control"
              autoFocus="on"
            />
          </div>
          <div className="col-3 ">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      <h1>New York</h1>
      <ul>
        <li>Wednesday 07:00</li>
        <li>Mostly Cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6 ">
          <img
            src="https://assets.msn.com/weathermapdata/1/static/weather/Icons/taskbar_v10/Condition_Card/SunnyDayV3.svg"
            alt="Mostly Cloudy"
            className="current-temp"
          />

          <div className="current-temp">
            <span className="temperature">6</span>
            <span className="degree">°C</span>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 15%</li>
            <li>Humidity: 10%</li>
            <li>Wind: 5 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
