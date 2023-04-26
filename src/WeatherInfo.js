import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="current-forecast-section">
      <h1>{props.data.city}</h1>
      <div className="row">
        <div className="col-6 d-flex align-items-center">
          <ul>
            <li>
              <FormattedDate date={props.data.date} />
            </li>
            <li className="text-capitalize">{props.data.description}</li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {Math.round(props.data.wind)}km/h</li>
          </ul>
        </div>
        <div className="col-6 text-center">
          <img
            className="current-icon"
            src={props.data.iconUrl}
            alt={props.data.icon}
          />
          <div>
            <span className="temperature">
              {Math.round(props.data.temperature)}
            </span>
            <span className="unit">°C</span>
          </div>
        </div>
      </div>
    </div>
  );
}
