import React from 'react';

const WeatherData = ({ weatherData }) => {
  if (!weatherData) return null;

  const { name, main, weather } = weatherData;

  return (
    <div className="weather-card">
      <h2>{name}</h2>
      <p>Temperature: {Math.round(main.temp - 273.15)}°C</p>
      <p>Humidity: {main.humidity}%</p>
      <p>Condition: {weather[0].description}</p>
    </div>
  );
};

export default WeatherData;