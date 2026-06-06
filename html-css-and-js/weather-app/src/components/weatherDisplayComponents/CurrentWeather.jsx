function CurrentWeather({ location, weatherData }) {

  if(!weatherData) return null
  return (
    <div>
      <div className="bg-[url('./assets/images/bg-today-small.svg')] md:bg-[url('./assets/images/bg-today-large.svg')] bg-cover bg-no-repeat bg-center">
        {location && <h3>{location}</h3>}
      </div>
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-[hsl(243,23%,30%)] text-[hsl(0,0%,100%)] rounded-md flex flex-col gap-4">
            <span>Feels Like</span>
            <span className="text-2xl">{weatherData.current.temperature_2m}°C</span>
          </div>
          <div className="bg-[hsl(243,23%,30%)] text-[hsl(0,0%,100%)] rounded-md flex flex-col gap-4">
            <span>Humidity</span>
            <span className="text-2xl">{weatherData.current.relative_humidity_2m}%</span>
          </div>
          <div className="bg-[hsl(243,23%,30%)] text-[hsl(0,0%,100%)] rounded-md flex flex-col gap-4">
            <span>Wind</span>
            <span className="text-2xl">{weatherData.current.wind_speed_10m}km/h</span>
          </div>
          <div className="bg-[hsl(243,23%,30%)] text-[hsl(0,0%,100%)] rounded-md flex flex-col gap-4">
            <span>Precipitation</span>
            <span className="text-2xl">{weatherData.current.precipitation}mm</span>
          </div>
        </div>
    </div>
  );
}

export default CurrentWeather;
