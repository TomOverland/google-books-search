const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const PORT = process.env.PORT || 3001
const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static Assests
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// Defining API routes
app.use(routes);

// Connect to the Mongo Database
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks", { 
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Listen call to host app locally
app.listen(PORT, () => {
    console.log(`Server now listening on port ${PORT}.`)
})