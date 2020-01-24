const express = require("express");
const cors = require("cors");
const memeRoutes = require("./routes/memes");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config();

mongoose.connect(process.env.MONGO_CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use("/api/memes", memeRoutes);

const port = process.env.PORT || 3001;
app.listen(port);

console.log("App is listening on port " + port);
