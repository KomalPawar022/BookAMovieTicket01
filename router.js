const express = require("express");
const bookingRouter = express.Router();
const { fetchTicketsBooked, AddNewBooking } = require("./controller");
bookingRouter.get("/booking", fetchTicketsBooked);
bookingRouter.post("/booking", AddNewBooking);
module.exports = bookingRouter;
