import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    if (props.data.coordinates) {
      let apiKey = "c119ffef35b7245a5e03b6e5724ae961";
      let longitude = props.data.coordinates.lon;
      let latitude = props.data.coordinates.lat;

      console.log("Coordinates in WeatherForecast:", latitude, longitude);

      let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

      axios.get(apiUrl).then((response) => {
        setForecast(response.data.daily);

        setLoaded(true);
      });
    }
  }, [props.data.coordinates]);

  if (loaded) {
    console.log(forecast);
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <WeatherForecastDay data={forecast[0]} />
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
