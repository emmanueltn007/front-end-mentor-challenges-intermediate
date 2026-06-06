import { useState } from "react";
import Header from "./components/Header";
import SearchSection from "./components/SearchSection";
import WeatherForecastGrid from "./components/weatherDisplayComponents/WeatherForecastGrid";

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [location, setLocation] = useState("");

  async function handleUserSearch() {
    const geoResponse = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(searchInput)}&count=10&language=en&format=json`,
    );

    const geoData = await geoResponse.json();

    if (!geoData.results || geoData.results.length === 0) {
      console.log(
        "Location not found. Try a different name or check your spelling",
      );
    }

    const { latitude, longitude, name,country } = geoData.results[0];

    setLocation(`${name}, ${country}`);

    const weatherResponse = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=temperature_2m_max,temperature_2m_min&hourly=temperature_2m&current=precipitation,temperature_2m,relative_humidity_2m,wind_speed_10m`,
    );

    const data = await weatherResponse.json();

    setWeatherData(data);

    console.log(data);
  }
  return (
    <main className="bg-[hsl(243,96%,9%)] font-['DM Sans',sans-serif]">
      <Header />
      <SearchSection setSearchInput={setSearchInput} searchInput={searchInput} handleUserSearch={handleUserSearch}  />
      <WeatherForecastGrid location={location} weatherData={weatherData} />
    </main>
  );
}

export default App;
