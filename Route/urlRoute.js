const express = require('express');
const { HandleAnalytics } = require('../controller/ControllerURL'); // Import the analytics handler     
// Import the URL model
const { generateShortUrl } = require('../controller/ControllerURL');

const router = express.Router();

router.post('/', generateShortUrl);
// this for check that how many click on this toekn or id which is generated
router.get('/analytics/:shortId', HandleAnalytics);

module.exports = router;

    