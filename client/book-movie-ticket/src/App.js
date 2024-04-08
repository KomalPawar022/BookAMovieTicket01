import "./App.css";
import MovieSlot from "./components/MovieSlot";
import axios from "axios";
import Seats from "./components/Seats";
import data from "./data";
import LastBookingDetails from "./components/LastBookingDetails";
import { useContext } from "react";
import { GlobalContext } from "./context";
import { useNavigate } from "react-router-dom";
function App() {
  const navigate = useNavigate();
  const {
    selectedMovie,
    selectedSlot,
    selectedSeats,
    setSelectedMovie,
    setSelectedSlot,
    setSelectedSeats,
  } = useContext(GlobalContext);
  async function handleSaveBooking() {
    const response = await axios.post(
      `https://kxh7ww-8080.csb.app/api/bookings/add`,
      {
        movie: selectedMovie,
        slot: selectedSlot,
        seats: selectedSeats,
      },
    );
    const result = await response.data;
    console.log("add-result", result);
    if (result) {
      setSelectedMovie(null);
      setSelectedSlot(null);
      setSelectedSeats({
        A1: 0,
        A2: 0,
        A3: 0,
        A4: 0,
        D1: 0,
        D2: 0,
      });
      navigate("/");
    }
  }
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
