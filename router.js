const express = require("express");
const bookingRouter = express.Router();
const { fetchTicketsBooked, AddNewBooking } = require("./controller");
bookingRouter.get("/bookings", fetchTicketsBooked);
bookingRouter.post("/new", AddNewBooking);
module.exports = bookingRouter;
