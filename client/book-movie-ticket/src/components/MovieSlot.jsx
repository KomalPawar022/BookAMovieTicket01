import { useContext, useEffect, useState } from "react";

import { GlobalContext } from "../context";
export default function MovieSlot({ data, type }) {
  const { selectedMovie, setSelectedMovie, selectedSlot, setSelectedSlot } =
    useContext(GlobalContext);

  return (
    <div className="flex flex-col border border-black rounded-lg p-2">
      <div>
        <h2 className="text-lg font-bold">
          {type === "Movie" ? "Select a Movie" : "Select A Time Slot"}
        </h2>
      </div>
      <div className="flex grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 ">
        {data.map((item, index) => {
          return (
            <button
              key={index}
              className={
                type === "Movie"
                  ? selectedMovie === item
                    ? "btn m-2 border rounded-lg border-black bg-red-500"
                    : "btn m-2 border rounded-lg border-black hover:bg-red-500"
                  : selectedSlot === item
                    ? "btn m-2 border rounded-lg border-black bg-red-500"
                    : "btn m-2 border rounded-lg border-black hover:bg-red-500"
              }
              onClick={
                type === "Movie"
                  ? (e) => setSelectedMovie(e.target.textContent)
                  : (e) => setSelectedSlot(e.target.textContent)
              }
            >
              {item}
            </button>
          );
        })}
      </div>
    </div>
  );
}
