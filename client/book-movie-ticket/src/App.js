import "./App.css";
import MovieSlot from "./components/MovieSlot";
import Seats from "./components/Seats";
import data from "./data";

function App() {
  return (
    <div className="m-2 space-y-2">
      <h1 className="flex font-bold m-2 text-xl">Book Movie Tickets</h1>
      <MovieSlot data={data.movies} type="Movie" />
      <MovieSlot data={data.slots} type="Slot" />
      <Seats />
    </div>
  );
}

export default App;
