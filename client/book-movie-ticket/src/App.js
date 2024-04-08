import "./App.css";
import MovieSlot from "./components/MovieSlot";
import Seats from "./components/Seats";
import data from "./data";
import LastBookingDetails from "./components/LastBookingDetails";

function handleSaveBooking() {}

function App() {
  return (
    <div className="m-2 ">
      <h1 className="flex font-bold m-2 text-xl">Book Movie Tickets</h1>
      <div className="flex flex-row">
        <div className="flex flex-col space-y-2">
          <MovieSlot data={data.movies} type="Movie" />
          <MovieSlot data={data.slots} type="Slot" />
          <Seats />
          <button
            className="border rounded-lg bg-red-500 p-2 w-[150px]"
            onClick={handleSaveBooking}
          >
            Book Now
          </button>
        </div>
        <LastBookingDetails />
      </div>
    </div>
  );
}

export default App;
