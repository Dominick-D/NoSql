const router = require('express').Router();

const userRoutes = require('./userRoutes');
const thoughtRoutes = require('./thoughtRoutes');

// Prefix all routes defined in `user-routes.js` with `/users`
router.use('/users', userRoutes);

// Prefix all routes defined in `thought-routes.js` with `/thoughts`
router.use('/thoughts', thoughtRoutes);

module.exports = router;
