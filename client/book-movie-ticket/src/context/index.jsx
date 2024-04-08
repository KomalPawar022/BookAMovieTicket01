import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);
  return (
    <GlobalContext.Provider
      value={{
        selectedMovie,
        setSelectedMovie,
        selectedSlot,
        setSelectedSlot,
        selectedSeats,
        setSelectedSeats,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
