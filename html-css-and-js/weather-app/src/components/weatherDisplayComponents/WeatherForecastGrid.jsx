//import { useState, useEffect } from "react";
import CurrentWeather from "./CurrentWeather";
import DailyWeatherForecast from "./DailyWeatherForecast";
import HourlyWeatherForecast from "./HourlyWeatherForecast";

function WeatherForecastGrid ({ location, weatherData }) {

  //if (!weatherData) return <h1 className="text-4xl text-[hsl(0,0%,100%)]">Loading...</h1>

  return (
    <section className="px-4 md:px-8 grid grid-cols-6 grid-rows-3 gap-4">
      <div className="col-span-4 row-span-2">
        <CurrentWeather location={location} weatherData={weatherData} />
      </div>
      <div className="col-span-2 row-span-3">
        <HourlyWeatherForecast />
      </div>
      <div className="col-span-4 row-span-1">
        <DailyWeatherForecast />
      </div>
    </section>
  );
}

export default WeatherForecastGrid