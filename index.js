const express = require("express");
const cors = require("cors");
const bookingRouter = require("./router");

require("./db");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/bookings", bookingRouter);

app.use("/api", (req, res) => {
  res.status(200).json({ message: "Hello World" });
});

app.listen(8080, () => console.log(`App is running at 8080...`));
