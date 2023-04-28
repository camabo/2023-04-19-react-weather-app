import React from "react";

export default function WeatherForecastDay(props) {
  function maximumTemperature() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}°`;
  }

  function minimumTemperature() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }
  return (
    <div className="col">
      <div className="WeatherForecast-day">{day()}</div>
      <div>
        {" "}
        <img src={props.data.condition.icon_url} />
      </div>
      <span className="WeatherForecast-temperature-max">
        {maximumTemperature()}
      </span>
      <span className="WeatherForecast-temperature-min">
        {minimumTemperature()}
      </span>
    </div>
  );
}
