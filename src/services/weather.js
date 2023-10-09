import { config } from "../config/config";

export const getWeather = async ({ lat = null, lon = null, city = null }) => {
  let apiUrl = "";
  if (lat && lon) {
    apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${config.WEATHER_API_KEY}&units=metric`;
  } else if (city) {
    apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${config.WEATHER_API_KEY}&units=metric`;
  }

  const data = await fetch(apiUrl);
  const jsonData = await data.json();
  return jsonData;
};
