const express = require('express');

const { conferenceController } = require('./conferences.controller');

const router = express.Router();

router.get('', conferenceController);

module.exports = {
  conferenceRouter: router
};
