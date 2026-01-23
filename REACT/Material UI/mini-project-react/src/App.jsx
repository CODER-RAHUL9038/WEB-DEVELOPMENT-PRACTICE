import "./App.css";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";

function App() {
  return (
    <>
      <h1>Material UI</h1>

      <Button color="success" variant="outline">
        Contained
      </Button>

      <Button color="success" variant="contained">
        Contained
      </Button>
      <Button variant="contained" startIcon={<DeleteIcon />}>
        Delete
      </Button>
      <Button color="secondary">Secondary</Button>
      <Button color="secondary" variant="contained" disabled>
        Disabled
      </Button>

      <Button color="error" variant="contained" size="medium">
        Secondary
      </Button>
      <Button variant="contained" href="#text-buttons" size="small">
        Link
      </Button>
    </>
  );
}

export default App;
