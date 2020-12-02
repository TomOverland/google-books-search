const express = require('express');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3000
const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static Assests
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}