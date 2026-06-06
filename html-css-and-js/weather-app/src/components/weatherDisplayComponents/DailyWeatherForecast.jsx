function DailyWeatherForecast () {
  return (
    <div className="text-[hsl(0,0%,100%)]">
      <h4>
        Daily Forecast
      </h4>
      <div className="grid grid-cols-7 gap-4">
        <div className="bg-[hsl(243,23%,30%)] rounded-md">
          <img className="w-8 mx-auto" src="./assets/images/icon-rain.webp" alt="weather icon" />
          <div className="flex justify-between items-center">
            <span>5°C</span>
            <span>30°C</span>
          </div>
        </div>
        <div className="bg-[hsl(243,23%,30%)] rounded-md">
          <img className="w-8 mx-auto" src="./assets/images/icon-rain.webp" alt="weather icon" />
          <div className="flex justify-between items-center">
            <span>5°C</span>
            <span>30°C</span>
          </div>
        </div>
        <div className="bg-[hsl(243,23%,30%)] rounded-md">
          <img className="w-8 mx-auto" src="./assets/images/icon-rain.webp" alt="weather icon" />
          <div className="flex justify-between items-center">
            <span>5°C</span>
            <span>30°C</span>
          </div>
        </div>
        <div className="bg-[hsl(243,23%,30%)] rounded-md">
          <img className="w-8 mx-auto" src="./assets/images/icon-rain.webp" alt="weather icon" />
          <div className="flex justify-between items-center">
            <span>5°C</span>
            <span>30°C</span>
          </div>
        </div>
        <div className="bg-[hsl(243,23%,30%)] rounded-md">
          <img className="w-8 mx-auto" src="./assets/images/icon-rain.webp" alt="weather icon" />
          <div className="flex justify-between items-center">
            <span>5°C</span>
            <span>30°C</span>
          </div>
        </div>
        <div className="bg-[hsl(243,23%,30%)] rounded-md">
          <img className="w-8 mx-auto" src="./assets/images/icon-rain.webp" alt="weather icon" />
          <div className="flex justify-between items-center">
            <span>5°C</span>
            <span>30°C</span>
          </div>
        </div>
        <div className="bg-[hsl(243,23%,30%)] rounded-md">
          <img className="w-8 mx-auto" src="./assets/images/icon-rain.webp" alt="weather icon" />
          <div className="flex justify-between items-center">
            <span>5°C</span>
            <span>30°C</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DailyWeatherForecast