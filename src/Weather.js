import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="search-form-section">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city"
                className="form-control"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
      </div>
      <div className="current-weather-section">
        <h1>Edmonton</h1>
        <ul>
          <li>Wednesday 11:00am</li>
          <li>Chance of showers</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <div class="material-symbols-outlined current-icon">rainy</div>
            <div className="current-temp">1°C</div>
          </div>
          <div className="col-6">
            <ul>
              <li>Precipitation 30%</li>
              <li>Humidity 80%</li>
              <li>Wind 18km/h</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="forecast-section">
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
}
