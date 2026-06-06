function HourlyWeatherForecast () {
  return (
    <div>
      <div className="flex items-center justify-between">
        <p className="text-[hsl(0,0%,100%)]">
          Hourly Forecast
        </p>
        <button className="bg-[hsl(243,23%,30%)] text-white flex items-center gap-2 cursor-pointer px-2 py-1 rounded-md">
          <img src="./assets/images/icon-units.svg" alt="units icon" />
          Tuesday
          <img src="./assets/images/icon-dropdown.svg" alt="dropdown icon" />
        </button>
      </div>
      <div className="grid gap-2 text-[hsl(0,0%,100%)]">
        <div className="bg-[hsl(243,23%,30%)] flex justify-between items-center">
          <img className="w-8" src="./assets/images/icon-rain.webp" alt="weather icon" />
          <span>20°C</span>
        </div>
        <div className="bg-[hsl(243,23%,30%)] flex justify-between items-center">
          <img className="w-8" src="./assets/images/icon-rain.webp" alt="weather icon" />
          <span>20°C</span>
        </div>
        <div className="bg-[hsl(243,23%,30%)] flex justify-between items-center">
          <img className="w-8" src="./assets/images/icon-rain.webp" alt="weather icon" />
          <span>20°C</span>
        </div>
        <div className="bg-[hsl(243,23%,30%)] flex justify-between items-center">
          <img className="w-8" src="./assets/images/icon-rain.webp" alt="weather icon" />
          <span>20°C</span>
        </div>
        <div className="bg-[hsl(243,23%,30%)] flex justify-between items-center">
          <img className="w-8" src="./assets/images/icon-rain.webp" alt="weather icon" />
          <span>20°C</span>
        </div>
        <div className="bg-[hsl(243,23%,30%)] flex justify-between items-center">
          <img className="w-8" src="./assets/images/icon-rain.webp" alt="weather icon" />
          <span>20°C</span>
        </div>
        <div className="bg-[hsl(243,23%,30%)] flex justify-between items-center">
          <img className="w-8" src="./assets/images/icon-rain.webp" alt="weather icon" />
          <span>20°C</span>
        </div>
        <div className="bg-[hsl(243,23%,30%)] flex justify-between items-center">
          <img className="w-8" src="./assets/images/icon-rain.webp" alt="weather icon" />
          <span>20°C</span>
        </div>
      </div>
    </div>
  );
}

export default HourlyWeatherForecast