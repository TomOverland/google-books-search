const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

const PORT = process.env.PORT || 3001;
const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve Static Assests to Heroku
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Defining API routes
app.use(routes);

// Connect to the Mongo Database
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost:27017/googlebooks",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB with Mongoose!");
});
mongoose.connection.on("error", () => {
  console.log("Error connecting to the database!");
});
mongoose.connection.on("disconnected", () => {
  console.log("Disconnected from MongoDB!");
});

// Listen call to host app locally
app.listen(PORT, () => {
  console.log(`Server now listening on port ${PORT}.`);
});
