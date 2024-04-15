const express = require("express");
const cors = require("cors");
const bookingRouter = require("./router");

require("./db");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", bookingRouter);

app.listen(8081, () => console.log(`App is running at 8080...`));
