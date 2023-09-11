const express = require('express');
const app = express();
const colors = require('colors');
const dotenv = require('dotenv').config();
require('express-async-errors');
const connectDB = require('./database/db');
const UserRouter = require('./src/routes/person.route');
const PORT = process.env.PORT || 5000;
const cors = require('cors');
connectDB();

app.use(express.urlencoded({ extended: false }));
app.use(cors({ origin: "*" }));
app.use(express.json());

app.use('/api', UserRouter);

// Start the server
app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`);
});