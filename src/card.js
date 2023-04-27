import React, { useState } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import weather from './weather-removebg-preview.png';


function WeatherForm() {
  const [city, setCity] = useState('');
  const [temperature, setTemperature] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4fad0d2239c1b74215b381ae69a260af`;
    try {
      const response = await axios.get(url);
      setTemperature(response.data.main.temp);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='box'>

        <div className="row">
            <div className="column">
            <div className="column1">
        <Card className="text-center" id='wea'>
            <Card.Title className='title' >The Weather App</Card.Title>
           <Card.Text> {<p>{parseInt(temperature)/10}°Celcius</p>}
            {<p className='city'>{city}</p>}
            </Card.Text>
        </Card>
        
        </div>
        <div className="column2">
        <Card className="sub">
            <Card.Body>
    <form onSubmit={handleSubmit}>
        <div className='field-wrap'>
      <input id="city-input" type="text" value={city} onChange={(event) => setCity(event.target.value)} placeholder='Enter a City' />
      <button type="submit">Get Weather</button>
        </div>
    </form>
    </Card.Body>
    </Card>
    </div>
    </div>
    <div className='column'>
    <Card className='image'>
        <img src={weather} alt='weather'></img>
    </Card>
    </div>
    </div>
    </div>
  );
}

export default WeatherForm;
