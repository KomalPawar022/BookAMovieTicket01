// const mongodb = require("mongodb");

// const mongoURI =
//   "mongodb+srv://KomalPawar:mongoPassword@atlascluster.utzf9ud.mongodb.net/" +
//   "bookMovieSchema ";

// let mongoose = require("mongoose");
// const { bookMovieSchema } = require("./schema");

// mongoose
//   .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => {
//     console.log("connection established with mongodb server online");
//   })
//   .catch((err) => {
//     console.log("error while connection", err);
//   });
// let collection_connection = mongoose.model("bookmovietickets", bookMovieSchema);

// exports.connection = collection_connection;
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
mongoose
  .connect(
    "mongodb+srv://KomalPawar:mongoPassword@atlascluster.utzf9ud.mongodb.net/?retryWrites=true&w=majority&appName=AtlasCluster",
    // "mongodb+srv://KomalPawar:mongoPassword@atlascluster.utzf9ud.mongodb.net/",
  )
  .then(() => console.log("Mongodb Connected"))
  .catch((err) => console.log(err));
