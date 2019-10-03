import React, { Component } from 'react';
import Form from './Form';
import Result from './Result';
import axios from "axios"
import './App.css';

// Klucz do API
const APIKey = 'db21ea10a65548c2e76d7ad310b156e0'


class App extends Component {
	state = {
		value: '',
		date: '',
		city: '',
		longitude: '',
		latitude: '',
		sunrise: '',
		sunset: '',
		temp: '',
		temp_min: '',
		temp_max: '',
		pressure: '',
		wind: '',
		humidity: '',
		clouds: '',
		weather_desc: '',
		weather_iconID: '',
		err: false,
	};

	handleInputChange = e => {
		this.setState({
			value: e.target.value,
		});
	};

	handleCitySubmit = e => {
		e.preventDefault();
		console.log('potwierdzony formularz');
		const API =
			`http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=${APIKey}&units=metric`;


	
			axios.get(API)
				.then((response)=>{
					console.log(response.data)
					return response.data
			})
			.then(data => {

		
				const time = new Date().toLocaleString()
				this.setState(state => ({
					err: false,
	
					date: time,
					city: state.value,
					longitude: data.coord.lon,
					latitude: data.coord.lat,
					sunrise: data.sys.sunrise,
					sunset: data.sys.sunset,
					temp: data.main.temp,
					temp_min: data.main.temp_min,
					temp_max: data.main.temp_max,
					pressure: data.main.pressure,
					wind: data.wind.speed,
					humidity: data.main.humidity,
					clouds: data.weather[0].main,
					weather_desc: data.weather[0].description,
					weather_iconID:data.weather[0].icon
				}))

			})

		.catch(err => {
			console.log(err);
			this.setState(prevState => ({
				err: true,
				city: prevState.value
			}))
		
		})
	}

	render() {
		return (
			<div className="App">
				
				<Form 
				value={this.state.value} 
				change={this.handleInputChange} 
				submit={this.handleCitySubmit} 
				/>
				<Result weather={this.state}/>
				
			</div>
		);
	}
}

export default App;


// fetch(API)
	// 	// .then(response => console.log(response))
	// 	// .catch(err => console.log(err))
	// 	.then(response => {
	// 		if(response.ok){
	// 			return response
	// 		}
	// 		throw Error("nie udało się")
	// 	})
	// 	.then(response => response.json())
	// 	// .then(data => console.log(data))
		// .then(data => {

		// 	const time = new Date().toLocaleString()
		// 	this.setState(state => ({
		// 		err: false,

		// 		date: time,
		// 		city: state.value,
		// 		longitude: data.coord.lon,
		// 		latitude: data.coord.lat,
		// 		sunrise: data.sys.sunrise,
		// 		sunset: data.sys.sunset,
		// 		temp: data.main.temp,
		// 		temp_min: data.main.temp_min,
		// 		temp_max: data.main.temp_max,
		// 		pressure: data.main.pressure,
		// 		wind: data.wind.speed,
		// 		humidity: data.main.humidity,
		// 		clouds: data.clouds,
		// 	}))
	// 	})