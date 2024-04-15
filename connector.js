const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
mongoose
  .connect(
    "mongodb+srv://KomalPawar:mongoPassword@atlascluster.utzf9ud.mongodb.net/?retryWrites=true&w=majority&appName=AtlasCluster",
  )
  .then(() => console.log("Mongodb Connected"))
  .catch((err) => console.log(err));
