const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const connectDB = require('./database/db');
const PORT = process.env.PORT || 5000;
require('express-async-errors');
const app = express();
connectDB();

// Start the server
app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`);
});