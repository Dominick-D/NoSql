require('dotenv').config();
const express = require('express');
const routes = require('./routes');
const connectDB = require('./config/connection'); // Import the connection function

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB
connectDB();

// Use all routes from the routes directory
app.use(routes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});
