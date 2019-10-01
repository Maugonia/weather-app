import React from 'react';

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
    err} =props.weather
    
    let content = null;

    if(!err && city){
        const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString()
        content = (
            <div>
                <h3><em>Miasto: {city}</em></h3>
                <h4>geolocalisation: {longitude, latitude}</h4>
                <h4>Data: {date}</h4>
                <h4>Aktualna temperatura: {temp}</h4>
                <h4>Wschód słońca: {sunriseTime}</h4>
            </div>
        )
    }






    return ( 
        <div className="result">
      {err ? `Nie znaleziono ${city}` : content}
        </div>

        );
}
 
export default Result;