import "./App.css";
import WeatherCard from "./WeatherCard";
import SearchButton from "./SearchButton";
import { useState } from "react";
const API_URL = import.meta.env.VITE_WEATHER_API_URL;
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export default function WeatherApp() {
  let [city, setCity] = useState("");
  let [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  let getWeather = async () => {
    if (!city) return;

    try {
      const response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`,
      );
      const data = await response.json();
      console.log(data);
      setWeather(data);
    } catch (error) {
      console.log("Error Fetching Weather", error);
    }
  };
  return (
    <>
      <SearchButton
        city={city}
        setCity={setCity}
        getWeather={getWeather}
      ></SearchButton>
      {weather && <WeatherCard city={city} weather={weather} />}
    </>
  );
}
