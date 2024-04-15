const mongoose = require("mongoose");
const BookMovieSchema = require("./schema/BookMovieSchema");
//  Fetch All Booked Tickets (GET request handler)
const fetchTicketsBooked = async (req, res) => {
  let data;
  try {
    data = await BookMovieSchema.find();
  } catch (e) {
    console.log(e);
  }
  if (!data) {
    return res.status(404).json({ message: "Bookings Not Found" });
  }
  return res.status(200).json({ data });
};
//  Add New Booking (POST request handler)
const AddNewBooking = async (req, res) => {
  try {
    const { movie, seats, slot } = req.body;
    const newBooking = new BookMovieSchema({ movie, seats, slot });
    await newBooking.save();

    return res.status(200).json({ newBooking });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { fetchTicketsBooked, AddNewBooking };
