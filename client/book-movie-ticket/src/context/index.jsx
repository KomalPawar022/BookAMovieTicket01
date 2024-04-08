import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState({
    A1: 0,
    A2: 0,
    A3: 0,
    A4: 0,
    D1: 0,
    D2: 0,
  });
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
