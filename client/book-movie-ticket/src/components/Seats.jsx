import { useContext, useEffect, useState } from "react";
import { seats } from "../data";
import { GlobalContext } from "../context";
export default function Seats() {
  const { selectedSeats, setSelectedSeats } = useContext(GlobalContext);
  console.log(selectedSeats);
  function handleSelectedSeats(e) {
    const temp = [...selectedSeats];
    temp.push(e.target.textContent);
    setSelectedSeats(temp);
  }

  return (
    <div className="flex flex-col border border-black rounded-lg p-2">
      <div>
        <h2 className="text-lg font-bold">Select the Seats</h2>
      </div>
      <div className="flex grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 ">
        {seats.map((item, index) => {
          return (
            <div
              key={index}
              className={
                selectedSeats === item
                  ? "btn m-2 border rounded-lg border-black bg-red-500 text-center flex flex-col items-center justify-content-center"
                  : "btn m-2 border rounded-lg border-black hover:bg-red-500 text-center flex flex-col items-center justify-content-center"
              }
              onClick={handleSelectedSeats}
            >
              Type {item}
              <input
                type="number"
                className="border border-grey-800 mb-2 w-[100px]"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
