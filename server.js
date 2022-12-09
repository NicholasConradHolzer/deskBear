const express = require('express');
const router = express();
const PORT = process.env.PORT || 3001;

const apiRoutes = require('./routes/api-routes');
const htmlRoutes = require('./routes/html-routes');
const fs= require('fs');
const path = require ('path');

router.use(express.urlencoded({
    extended: true
}));

router.use(express.static('public'));
router.use(express.json());

router.use('/api', apiRoutes);
router.use('/', htmlRoutes);


router.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});