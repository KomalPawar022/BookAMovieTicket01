import { useContext } from "react";
import { seats } from "../data";
import { GlobalContext } from "../context";
export default function Seats() {
  const { selectedSeats, setSelectedSeats } = useContext(GlobalContext);

  function handleSelectedSeats(e) {
    const temp = selectedSeats;
    let type = e.target.parentElement.innerText.split(" ")[1];

    // let flag = false;
    // temp.map((item) => {
    //   if (item[type]) {
    //     item[type] = e.target.valueAsNumber;
    //flag = true;
    //   }
    // });
    // if (!flag) {
    //   let seat = {};
    //   seat[type] = e.target.valueAsNumber;
    //   temp.push(seat);
    // }
    temp[type] = e.target.valueAsNumber;
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
