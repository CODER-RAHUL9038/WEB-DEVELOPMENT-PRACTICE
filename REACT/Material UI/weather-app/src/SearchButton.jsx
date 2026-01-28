import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function SearchButton({ city, setCity, getWeather, error }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    getWeather();
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: 4,
      }}
    >
      <Typography variant="h4" sx={{ mb: 2 }}>
        Weather
      </Typography>

      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          gap: 1,
        }}
      >
        <TextField
          label="Search city"
          variant="outlined"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          sx={{ width: 260 }}
        />

        <Button
          type="submit"
          variant="contained"
          sx={{ px: 3 }}
        >
          Search
        </Button>
      </Box>

      {error && (
        <Typography color="error" sx={{ mt: 2 }}>
          {error}
        </Typography>
      )}
    </Box>
  );
}
