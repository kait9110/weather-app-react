import React from "react";

export default function WeatherDescription() {
  return (
    <div id="weather-description">
      <div className="row" id="weather-description-name">
        <div className="col">
          <span id="description">Sunny</span>
        </div>
      </div>
      <div className="row wind">
        <div className="col">
          Wind Speed: <span id="wind-speed">2</span> mph
        </div>
      </div>
      <div className="row humidity">
        <div className="col">
          Humidity: <span id="humidity">20</span>%{" "}
        </div>
      </div>
    </div>
  );
}
