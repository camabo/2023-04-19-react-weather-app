import React from "react";
import "./WeatherForecast.css";
import WeatherInfo from "./WeatherInfo";
import Weather from "./Weather";

export default function WeatherForecast(props) {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thursday</div>
          <div>
            {" "}
            <img src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png" />
          </div>
          <span className="WeatherForecast-temperature-max">10°C</span>
          <span className="WeatherForecast-temperature-min">15°C</span>
        </div>
      </div>
    </div>
  );
}
