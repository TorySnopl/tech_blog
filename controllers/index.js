const router = require('express').Router();

const loginRoute = require('./loginRoute');
const homeRoutes = require('./homeRoutes');

router.use('/', homeRoutes);
router.use('/login', loginRoute);

module.exports = router;
