import React, { useState } from 'react';
import Header from './component/Header';
import WeatherData from './component/WeatherData';
import axios from 'axios';
import './index.css'

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const fetchWeather = async (city) => {
    if (!city.trim()) {
      setError('Please enter a city name.');
      return;
    }

    const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    try {
      const response = await axios.get(url);
      setWeatherData(response.data);
      setError(null);
    } catch (err) {
      if (err.response && err.response.status === 404) {
        setError('City not found. Please try again.');
      } else if (err.response && err.response.status === 401) {
        setError('Invalid API key. Please check your configuration.');
      } else {
        setError('An unexpected error occurred. Please try again later.');
      }
    }
  };

  return (
    <div className="App">
      <Header onSearch={fetchWeather} />
      {error && <p className="error">{error}</p>}
      <WeatherData weatherData={weatherData} />
    </div>
  );
};

export default App;