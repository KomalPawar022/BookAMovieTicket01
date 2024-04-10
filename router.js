const express = require("express");
const bookingRouter = express.Router();
const { fetchTicketsBooked, AddNewBooking } = require("./controller");
bookingRouter.get("/", fetchTicketsBooked);
bookingRouter.post("/booking", AddNewBooking);
module.exports = bookingRouter;
