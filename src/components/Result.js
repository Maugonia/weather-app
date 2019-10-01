import React from 'react';
import { all } from 'q';

const Result = (props) => {
    const {
    date,
    city,
    longitude,
    latitude,
    sunrise,
    sunset,
    temp,
    temp_min,
    temp_max,
    pressure,
    wind,
    humidity,
    clouds, 
    weather_desc,
	weather_iconID,
    err} =props.weather
    
    let content = null;

    if(!err && city){
        const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString()
        const sunsetTime = new Date(sunset * 1000).toLocaleTimeString()
        content = (
            <div>
                <h3><em>{city}</em></h3>
                <h4>{longitude, latitude}</h4>
                <h4>{date}</h4>
                <h4>Temperature: {Math.floor(temp)} &#176;C</h4>
                <h5>min: {Math.floor(temp_min)} &#176;C max: {Math.floor(temp_max)} &#176;C</h5>
                <h4>Sunrise: {sunriseTime}</h4>
                <h4>Sunset: {sunsetTime}</h4>
                <h4>Pressure: {pressure} hPa</h4>
                <h4>Wind: {wind} km/h</h4>
                <h4>Humidity: {humidity} %</h4>
                <img src={`http://openweathermap.org/img/wn/${weather_iconID}@2x.png`}/>
                <h4>Weather: {weather_desc}</h4>
                <h4>Weather icon: {weather_iconID}</h4>
                <h4>Clouds: {clouds}</h4>

            </div>
        )
    }






    return ( 
        <div className="result">
      {err ? `Sorry, we couldn't find ${city}. Please make sure the name of the city is spelled correctly` : content}
        </div>

        );
}
 
export default Result;