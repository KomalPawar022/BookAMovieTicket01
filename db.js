const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
mongoose
  .connect(
    "mongodb+srv://komalpawar022:Mylo12345@cluster0.rcksu1q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    { useNewUrlParser: true },
    { useUnifiedTopology: true },
  )
  .then(() => console.log("Mongodb Connected"))
  .catch((err) => console.log(err));
