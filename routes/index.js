const router = require('express').Router();

// Importing the API routes
const apiRoutes = require('./api');

// Setting up the API routes
router.use('/api', apiRoutes);

// If no API routes are hit, send a 404
router.use((req, res) => {
  res.status(404).send('404 Error!');
});

module.exports = router;
