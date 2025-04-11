import React from "react";

function WeatherCard({ data }) {
  return (
    <div className="card text-center shadow">
      <div className="card-body">
        <h3 className="card-title">{data.city}</h3>
        <img src={data.icon} alt={data.condition} />
        <h4>{data.condition}</h4>
        <p className="card-text">Temperature: {data.temperature}°C</p>
        <p className="card-text">Humidity: {data.humidity}%</p>
        <p className="card-text">Wind Speed: {data.windSpeed} m/s</p>
      </div>
    </div>
  );
}

export default WeatherCard;
