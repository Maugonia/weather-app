import React from 'react';
import { all } from 'q';
import "./Result.css"

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
            <div className="Resultat">
                <h3>{city}</h3>
                <h4><i class="fas fa-map-marker-alt"></i> {longitude, latitude}</h4>
                <h4>Today is {date}</h4>
                <img src={`http://openweathermap.org/img/wn/${weather_iconID}@2x.png`}/>
                <h4><i class="fas fa-temperature-high"></i> Temperature: {Math.floor(temp)} &#176;C</h4>
                <h5>min: {Math.floor(temp_min)} &#176;C max: {Math.floor(temp_max)} &#176;C</h5>
                <h4><i class="fas fa-sun"></i> Sunrise: {sunriseTime}</h4>
                <h4><i class="fas fa-moon"></i> Sunset: {sunsetTime}</h4>
                <h4><i class="fas fa-compass"></i> Pressure: {pressure} hPa</h4>
                <h4><i class="fas fa-wind"></i> Wind: {wind} km/h</h4>
                <h4><i class="fas fa-tint"></i> Humidity: {humidity} %</h4>
               
                <h4><i class="fas fa-cloud-sun"></i> {weather_desc} </h4>
                {/* <h4>Weather icon: {weather_iconID}</h4> */}
           

            </div>
        )
    }






    return ( 
        <div className="result">
      {err ? `Sorry, we couldn't find ${city}` : content}
        </div>

        );
}
 
export default Result;