import "./App.css";
import WeatherCard from "./WeatherCard";
import SearchButton from "./SearchButton";
import { useState } from "react";
import Box from "@mui/material/Box";
const API_URL = import.meta.env.VITE_WEATHER_API_URL;
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export default function WeatherApp() {
  let [city, setCity] = useState("");
  let [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  let getWeather = async () => {
    if (!city) return;
    setError("");
    setWeather(null);

    try {
      const response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`,
      );
      if (!response.ok) {
        throw new Error("City not found");
      }
      const data = await response.json();
      console.log(data);
      setWeather(data);
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <Box
      style={{
        minHeight: "100vh",
       
      }}
    >
      <SearchButton
        city={city}
        setCity={setCity}
        getWeather={getWeather}
        error={error}
      ></SearchButton>
      {weather && <WeatherCard city={city} weather={weather} />}
    </Box>
  );
}
