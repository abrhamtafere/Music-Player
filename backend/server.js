const express = require("express");
var bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config({ path: "./config.env" });
const path = require("path");

const SongRoute = require("./routes/SongRoute");

const cors = require("cors");

const app = express();
const PORT = process.env.PORT | 5000;

app.use(express.json());
app.use(bodyParser.json());
app.use(cors("*"));

//fot atlas database //vpn creates a problem here
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((err) => console.error(err));

//fot local database
// mongoose
//   .connect(process.env.DATABASE_LOCAL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("MongoDB Connected..."))
//   .catch((err) => console.error(err));

app.use("/api", SongRoute);

// Serve audio files
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

  app.listen(PORT, () => console.log(`Listening at ${PORT}`));

