const mongoose = require("mongoose");
const BookMovieSchema = require("./schema/BookMovieSchema");
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

// const AddNewBooking = async (req, res) => {
//   const { movie, seats, slot } = req.body;
//   const newBooking = new BookMovieSchema({
//     movie,
//     seats,
//     slot,
//   });
//   try {
//     await newBooking.save();
//   } catch (e) {
//     console.log(e);
//   }

//   try {
//     const session = mongoose.startSession();
//     await session.startTransaction();
//     newBooking.save(session);
//     await session.commitTransaction();

//     console.log("Bookings Added");
//     return res.sendStatus(201).json({ newBooking });
//   } catch (e) {
//     return res.sendStatus(500).json({ message: e });
//   }
// };

const AddNewBooking = async (req, res) => {
  try {
    const { movie, seats, slot } = req.body;
    const newBooking = new BookMovieSchema({ movie, seats, slot });
    await newBooking.save();

    return res.status(201).json({ newBooking }); // Send successful booking response
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message }); // Send error response
  }
};

module.exports = { fetchTicketsBooked, AddNewBooking };
