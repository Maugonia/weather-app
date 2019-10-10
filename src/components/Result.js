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
                <div className="City-time">
                <h4>{city}</h4>
                <h6>{date}</h6>
                </div>

                <div className = "Localisation">
                <h6><i class="fas fa-map-marker-alt"></i> {longitude, latitude}</h6>
                </div>
               
                <div className = "Clouds">
                <img src={`https://openweathermap.org/img/wn/${weather_iconID}@2x.png`}/>
                <h3> {clouds} </h3>
                </div>
                
                <div className = "Temp0">
                    
                <h1>{Math.floor(temp)}</h1>
                <h2>&#176;</h2>
                </div>
               

               <div className = "Temp">
                <h4>{Math.floor(temp_min)} &#176;C</h4>
                <hr class="Line"></hr>
                <h4>{Math.floor(temp_max)} &#176;C</h4>
                </div>

            <div className ="Sun">
                <div clasname = "sun-icon">
                <h6><i class="fas fa-sun"></i> {sunriseTime}</h6>
               </div>

               <div className = "moon-icon">
                <h6><i class="fas fa-moon"></i> {sunsetTime}</h6>
                </div>
            </div>
            
            <div className = "group1">
                <div className = "wind-icon">
                <h6><i class="fas fa-wind"></i></h6><h6>{wind} km/h</h6>
                </div>
                <div className= "pressure-icon">
                <h6><i class="fas fa-compass"></i></h6><h6>{pressure} hPa</h6>
                </div>
                <div className = "humidity-icon">
                <h6><i class="fas fa-tint"></i></h6><h6>{humidity} %</h6>
                </div>
            </div>

           

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