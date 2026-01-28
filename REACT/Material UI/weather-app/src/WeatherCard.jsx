import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function WeatherCard({ weather }) {
  const description = weather.weather[0].description;
  const icon = weather.weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        mt: 4,
      }}
    >
      <Card
        sx={{
          width: "100%",
          maxWidth: 420,

          /* 🔮 Glass effect */
          background: "rgba(255, 255, 255, 0.25)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",

          borderRadius: "20px",
          border: "1px solid rgba(255, 255, 255, 0.3)",

          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.15)",
        }}
      >
        <CardMedia
          sx={{
            height: 140,
            borderTopLeftRadius: "20px",
            borderTopRightRadius: "20px",
          }}
          image="https://images.unsplash.com/photo-1702365202240-ecf532732c76"
        />

        <CardContent>
          <Typography variant="h5" gutterBottom>
            {weather.name}
          </Typography>

          {/* Temperature */}
          <Typography variant="h3">
            {Math.round(weather.main.temp)}°C
          </Typography>

          {/* Icon + description */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent:"center",
              gap: 1,
              mt: 1,
            }}
          >
            <img src={iconUrl} alt="weather icon" width={48} />
            <Typography variant="body1">{description}</Typography>
          </Box>

          {/* Details */}
          <Box sx={{ mt: 2 }}>
            <Typography variant="body2" color="text.secondary">
              Feels like: {weather.main.feels_like}°C
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Max: {weather.main.temp_max}°C | Min: {weather.main.temp_min}°C
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Humidity: {weather.main.humidity}%
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
