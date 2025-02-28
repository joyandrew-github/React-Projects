import { useState, useEffect } from 'react';
import './App.css';
import searchIcon from "./assets/search.jpg";
import clearIcon from "./assets/clear.jpeg";
import cloudIcon from "./assets/cloud.webp";
import drizzleIcon from "./assets/drizzle.jpeg";
import rainIcon from "./assets/rain.png";
import windIcon from "./assets/wind.webp";
import snowIcon from "./assets/snow.png"; 
import humidityIcon from "./assets/humidity.png";


const WeatherDetails = ({ icon, temp, city, country, lat, log, humidity, wind }) => {
  return (
    <div className="weather-details">
      <img src={icon} alt="Weather Icon" className="weather-icon" />
      <div className="temp">{temp}°C</div>
      <div className="location">
        <div>{city}</div>
        <div>{country}</div>
      </div>
      <div className="cord">
        <div>
          <span className="lat">Latitude: </span>
          <span>{lat}</span>
        </div>
        <div>
          <span className="log">Longitude: </span>
          <span>{log}</span>
        </div>
      </div>
      <div className="data-container">
        <div className="element">
          <img src={humidityIcon} alt="Humidity" className="icon" />
          <div className="data">
            <div className="humidity-percent">{humidity}%</div>
            <div className="text">Humidity</div>
          </div>
        </div>
        <div className="element">
          <img src={windIcon} alt="Wind" className="icon" />
          <div className="data">
            <div className="wind-percent">{wind} km/h</div>
            <div className="text">Wind Speed</div>
          </div>
        </div>
      </div>
    </div>
  );
};
const searchWeather = async (city) => {
  const apikey = "3715a77c94d13e84eebaf0e385b6139c";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;
  const url2=` https://openweathermap.org/img/wn/10d@2x.png`;

  try {
    const response = await fetch(url);
    if (response.status === 404) {
      return null;
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return null;
  }
};

function App() {
  const [icon, setIcon] = useState(drizzleIcon);  
  const [temp, setTemp] = useState(0);
  const [city, setCity] = useState("CHENNAI");
  const [country, setCountry] = useState("IN");
  const [lat, setLat] = useState(0);
  const [log, setLog] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [wind, setWind] = useState(0);
  const [errorMessage, setErrorMessage] = useState(""); 


  useEffect(() => {
    const fetchDefaultWeather = async () => {
      const defaultCity = 'Chennai';
      const data = await searchWeather(defaultCity);

      if (data && data.main) {
        setTemp(data.main.temp);
        setCity(data.name);
        setCountry(data.sys.country);
        setLat(data.coord.lat);
        setLog(data.coord.lon);
        setHumidity(data.main.humidity);
        setWind(data.wind.speed);
        setErrorMessage("");

   
        const weatherMain = data.weather[0].main.toLowerCase();
        updateWeatherIcon(weatherMain); 
        setErrorMessage("Unable to load default city weather.");
      }
    };

    fetchDefaultWeather();
  }, []);


  const updateWeatherIcon = (weatherMain) => {
    switch (weatherMain) {
      case 'clear':
        setIcon(clearIcon);  
        break;
      case 'clouds':
        setIcon(cloudIcon);
        break;
      case 'rain':
        setIcon(rainIcon);
        break;
      case 'snow':
        setIcon(snowIcon);   
        break;
      case 'drizzle':
        setIcon(drizzleIcon);
        break;
      case 'wind':
        setIcon(windIcon);
        break;
      default:
        setIcon(drizzleIcon); 
        break;
    }
};

  const handleSearch = async () => {
    const cityInput = document.querySelector(".cityInput").value;
    const data = await searchWeather(cityInput);

    if (data && data.main) {
      setTemp(data.main.temp);
      setCity(data.name);
      setCountry(data.sys.country);
      setLat(data.coord.lat);
      setLog(data.coord.lon);
      setHumidity(data.main.humidity);
      setWind(data.wind.speed);
      setErrorMessage(""); 
      const weatherMain = data.weather[0].main.toLowerCase();
      updateWeatherIcon(weatherMain); 
    } else {
      setErrorMessage("City not found. Please try another city."); // Show error message if city not found
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="container">
      <div className="input-container">
        <input 
          type="text" 
          className="cityInput" 
          placeholder="Search City"
          onKeyPress={handleKeyPress} 
        />
        <div className="search-icon" onClick={handleSearch}>
          <img src={searchIcon} alt="Search" />
        </div>
      </div>

      {/* Show error message if city not found */}
      {errorMessage && <p className="error-message">{errorMessage}</p>}

      {/* Render WeatherDetails component */}
      <WeatherDetails 
        icon={icon} 
        temp={temp} 
        city={city} 
        country={country} 
        lat={lat} 
        log={log} 
        humidity={humidity} 
        wind={wind} 
      />
      <p className="copyright">
        Designed by <span>JoyAndrew</span>
      </p>
    </div>
  );
}

export default App;
