import "./App.css";
import { useEffect, useState } from "react";
function App() {
  const name = "Lamphun";
  const apiKey = "f7c93473d2f6ad43348814b5e863c23d";
  const [city, setCity] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${apiKey}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCity(data);
        setIsLoading(true);
      });
  }, [name]);

  const convertTempKtoC = (k) => {
    return (k - 273).toFixed();
  };
  return (
    isLoading && (
      <div className="App">
        <section>
          <div className="location">
            <h1 className="city">{city.name}</h1>
            <p className="state">{city.sys.country}</p>
          </div>
          <div className="card">
            <div className="weather">
              <h1>{convertTempKtoC(city.main.temp)} &deg;C</h1>
              <small>
                max: {convertTempKtoC(city.main.temp_max)} &deg;C, min:
                {convertTempKtoC(city.main.temp_min)} &deg;C
              </small>
            </div>
            <div className="info">
              <div className="status">{city.weather[0].main}</div>
              {/* ค่าความขื้น */}
              <div className="humidity">Humidity: {city.main.humidity}</div>
              <div className="wind">Wind Speed: {city.wind.speed}</div>
            </div>
          </div>
        </section>
      </div>
    )
  );
}

export default App;
