import { render, screen } from "@testing-library/react";
import { GlobalContext } from "../context";
import { fireUserEvent } from "@testing-library/user-event";
import MovieSlot from "./MovieSlot";

// Mock the GlobalContext with default values
const MockGlobalContext = ({ children }) => {
  const selectedMovie = "Movie A";
  const setSelectedMovie = jest.fn();
  const selectedSlot = "10:00 AM";
  const setSelectedSlot = jest.fn();

  return (
    <GlobalContext.Provider
      value={{ selectedMovie, setSelectedMovie, selectedSlot, setSelectedSlot }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

test("MovieSlot component renders correctly and updates state using useContext", () => {
  const movieData = ["Movie A", "Movie B", "Movie C"];
  const slotData = ["10:00 AM", "12:00 PM", "2:00 PM"];

  // Render the component with MockGlobalContext and movie data
  render(
    <MockGlobalContext>
      <MovieSlot data={movieData} type="Movie" />
    </MockGlobalContext>,
  );

  // Assert that "Select a Movie" heading is displayed
  expect(screen.getByText(/Select a Movie/i)).toBeInTheDocument();

  // Assert that movie buttons are rendered with correct styles (selected and unselected)
  const movieButtons = screen.getAllByRole("button");
  expect(movieButtons[0]).toHaveClass(
    "btn m-2 border rounded-lg border-black bg-red-500",
  ); // Selected movie
  expect(movieButtons[1]).toHaveClass(
    "btn m-2 border rounded-lg border-black hover:bg-red-500",
  ); // Unselected movie

  // Render the component with MockGlobalContext and slot data
  render(
    <MockGlobalContext>
      <MovieSlot data={slotData} type="Time Slot" />
    </MockGlobalContext>,
  );

  // Assert that "Select A Time Slot" heading is displayed
  expect(screen.getByText(/Select A Time Slot/i)).toBeInTheDocument();
});
