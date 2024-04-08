import { useContext, useEffect, useState } from "react";
import { movies } from "../data";
import { GlobalContext } from "../context";
export default function Movie() {
  const { selectedMovie, setSelectedMovie } = useContext(GlobalContext);

  console.log(selectedMovie);

  return (
    <div className="flex flex-col border border-black rounded-lg p-2">
      <div>
        <h2 className="text-lg font-bold">Select a Movie</h2>
      </div>
      <div className="flex grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 ">
        {movies.map((item) => {
          return (
            <button
              className={
                selectedMovie === item
                  ? "btn m-2 border rounded-lg border-black bg-red-500"
                  : "btn m-2 border rounded-lg border-black hover:bg-red-500"
              }
              onClick={(e) => setSelectedMovie(e.target.textContent)}
            >
              {item}
            </button>
          );
        })}
      </div>
    </div>
  );
}
