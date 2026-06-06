//import { useState, useEffect } from "react";
import CurrentWeather from "./CurrentWeather";
import DailyWeatherForecast from "./DailyWeatherForecast";
import HourlyWeatherForecast from "./HourlyWeatherForecast";

function WeatherForecastGrid ({ location, weatherData }) {

  //if (!weatherData) return <h1 className="text-4xl text-[hsl(0,0%,100%)]">Loading...</h1>

  return (
    <section className="px-4 md:px-8">
      <CurrentWeather location={location} weatherData={weatherData} />
      <HourlyWeatherForecast />
      <DailyWeatherForecast />
    </section>
  );
}

export default WeatherForecastGrid