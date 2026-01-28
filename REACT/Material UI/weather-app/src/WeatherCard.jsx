import Card from "@mui/material/Card";
import "./WeatherCard.css";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";

export default function WeatherCard({ weather, city }) {
  const description = weather.weather[0].description;
  const icon = weather.weather[0].icon;
  let iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

  return (
    <div>
      <div className="card-container">
        <Card sx={{ width: "60%", maxWidth: "450px" }}>
          <CardMedia
            sx={{ height: 140 }}
            image="https://images.unsplash.com/photo-1702365202240-ecf532732c76?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGF6ZSUyMHdlYXRoZXIlMjBrb2xrYXRhfGVufDB8fDB8fHww"
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {city}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              🌡 Temperature: {weather.main.temp}°C <br />
              🤒 Feels like: {weather.main.feels_like}°C <br />
              🔼 Max: {weather.main.temp_max}°C <br />
              🔽 Min: {weather.main.temp_min}°C <br />
              💧 Humidity: {weather.main.humidity}% <br />
            </Typography>
            <Typography><img
                className="icon-image"
                src={iconUrl}
                alt="description-image"
              /> <span>{description}</span></Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
