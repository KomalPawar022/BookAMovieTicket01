const mongoose = require("mongoose");
const bookMovieSchema = require("./Schema");
const fetchTicketsBooked = async (req, res) => {
  let data;
  try {
    data = await bookMovieSchema.find();
  } catch (e) {
    console.log(e);
  }
  if (!data) {
    return res.status(404).json({ message: "Bookings Not Found" });
  }
  return res.status(200).json({ data });
};

const AddNewBooking = async (req, res) => {
  const { movie, seats, slot } = req.body;
  const newBooking = {
    movie,
    seats,
    slot,
  };
  try {
    await newBooking.save();
  } catch (e) {
    console.log(e);
  }

  try {
    const session = mongoose.startSession();
    await session.startTransaction();
    await newBooking.save(session);
    await session.commitTransaction();
  } catch (e) {
    return res.send(500).json({ message: e });
  }
  return res.status(201).json({ newBooking });
};
module.exports = { fetchTicketsBooked, AddNewBooking };
