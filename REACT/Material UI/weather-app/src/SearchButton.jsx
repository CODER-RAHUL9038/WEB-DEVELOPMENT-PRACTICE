import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function SearchButton({ city, setCity, getWeather }) {
  let handleSubmit = (e) => {
    e.preventDefault();
    console.log(city);
    setCity("");
    getWeather();
  };
  return (
    <div>
      <form onSubmit={handleSubmit} action="/">
        <TextField
          id="outlined-basic"
          label="City"
          variant="outlined"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <br />
        <br />
        <Button type="submit" variant="contained">
          Search
        </Button>
      </form>
    </div>
  );
}
