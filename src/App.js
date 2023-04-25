import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Edmonton" />
        <footer>
          This project was coded by Caitlin Bolanos and is
          <a
            href="https://github.com/camabo/2023-04-19-react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            open-sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}
