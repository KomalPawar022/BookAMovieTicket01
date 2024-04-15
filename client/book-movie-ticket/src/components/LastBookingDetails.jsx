import { useEffect, useState } from "react";
import axios from "axios";
export default function LastBookingDetails() {
  const [bookingData, setBookingData] = useState([]);
  async function fetchData() {
    const response = await axios.get(`https://kr9383-8081.csb.app/api/booking`);
    const result = await response.data;
    console.log("result", result.data);
    if (result.data.length > 0) {
      setBookingData(result.data);
    }
  }
  console.log("bookingData", bookingData);
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="border border-black rounded-lg ml-2 h-[300px] w-[300px] p-2 overflow-auto">
      <h1 className="font-bold text-xl">Last Booking Details:</h1>
      <hr className="m-1 border border-black" />
      {bookingData && bookingData.length > 0
        ? bookingData.map((item) => {
            return (
              <div>
                <h2 className="font-bold">Seats:</h2>
                <p>A1 : {item.seats["A1"]}</p>
                <p>A2 : {item.seats["A2"]}</p>
                <p>A3 : {item.seats["A3"]}</p>
                <p>A4 : {item.seats["A4"]}</p>
                <p>D1 : {item.seats["D1"]}</p>
                <p>D2 : {item.seats["D2"]}</p>
                <h2 className="font-bold">Slots:</h2>
                <p> {item.slot}</p>
                <h2 className="font-bold">Movie</h2>
                <p> {item.movie}</p>
                <hr className="m-1 border border-black" />
              </div>
            );
          })
        : null}
    </div>
  );
}
