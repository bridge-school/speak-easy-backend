const express = require('express');

const { getConferences, addConference } = require('./conferences.controller');

const router = express.Router();

router.get('/', getConferences);
router.post('/', addConference);

module.exports = {
  conferenceRouter: router
};
