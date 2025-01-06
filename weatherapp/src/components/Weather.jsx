import React, {useState, useEffect} from "react";
import '../styles/Weather.css'
import { capitalizeWords } from "../Utility/utils";

const Weather = ({city}) => {
    const [weather, setWeather] = useState(null);
    const apiKey = "53cbc5ce367e2735dc63a3dc437519e4";

    useEffect(() =>{
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => setWeather(data))
    }, [city])

    return(
        <div className="weather-container">
            {weather ? (
                <div>
                    <h2 className="weather-title">{weather.name}</h2>
                    <p className="weather-temp">{Math.round(weather.main.temp - 273.15)}°C</p>
                    <p className="weather_description">{capitalizeWords(weather.weather[0].description)}</p> 
                </div>
            ):(
                <p>Loading...</p>
            )}
        </div>
    )
}

export default Weather;