const express = require('express');

const { healthRouter } = require('../routes/health/health.router');
const {
  conferenceRouter
} = require('../routes/conferences/conferences.router');

const router = express.Router();
router.use('/health', healthRouter);
router.use('/conferences', conferenceRouter);

module.exports = router;
