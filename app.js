const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const connectDB = require('./database/db');
const PORT = process.env.PORT || 5000;
require('express-async-errors');
const cors = require('cors');
const app = express();
connectDB();

app.use(express.urlencoded({ extended: false }));
app.use(cors({ origin: "*" }));
app.use(express.json());

// Start the server
app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`);
});