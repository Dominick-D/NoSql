require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');


const app = express();
const PORT = process.env.PORT;

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Use all routes from the routes directory
app.use(routes);

// Use this to log mongo queries being executed!
mongoose.set('debug', true);

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});
