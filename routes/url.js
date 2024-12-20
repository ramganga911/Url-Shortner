const express = require('express');
const {handlegenerateNewShortURL, handlegetanalytics, handleOutputLink} = require("../controllers/url");

const router = express.Router();

router.post('/', handlegenerateNewShortURL);
router.get('/analytics', handlegetanalytics);
// router.get('/url/:shortId', handleOutputLink);
module.exports =  router;