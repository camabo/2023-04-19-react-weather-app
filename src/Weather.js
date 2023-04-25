import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response);
    setWeatherData({
      ready: true,
      city: response.data.city,
      temperature: response.data.temperature.current,
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      iconUrl: response.data.condition.icon_url,
      icon: response.data.condition.icon,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="search-form-section">
          <form className="shadow-sm">
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  placeholder="Enter a city . . ."
                  className="form-control"
                  autoFocus="on"
                />
              </div>
              <div className="col-3">
                <input
                  type="submit"
                  value="Search"
                  className="btn btn-primary w-100 shadow-sm"
                />
              </div>
            </div>
          </form>
        </div>
        <div className="current-forecast-section">
          <h1>{weatherData.city}</h1>
          <div className="row">
            <div className="col-6">
              <ul>
                <li>Wednesday 11:00am</li>
                <li className="text-capitalize">{weatherData.description}</li>
                <li>Humidity: {weatherData.humidity}%</li>
                <li>Wind: {Math.round(weatherData.wind)}km/h</li>
              </ul>
            </div>
            <div className="col-6 text-center">
              <img
                className="current-icon"
                src={weatherData.iconUrl}
                alt={weatherData.icon}
              />
              <div>
                <span className="temperature">
                  {Math.round(weatherData.temperature)}
                </span>
                <span className="unit">°C</span>
              </div>
            </div>
          </div>
        </div>
        <div className="future-forecast-section">
          <div className="row">
            <div className="col-2">
              <div>Sat</div>
              <div className="material-symbols-outlined">cloudy</div>
              <div>2°C</div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "f7df06o21b173b40085t447a104b765a";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading . . .";
  }
}
