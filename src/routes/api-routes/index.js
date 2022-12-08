const router = require('express').Router();
const snAPIRoute = require('./snAPIRoute');

router.use(snAPIRoute);

module.exports = router;