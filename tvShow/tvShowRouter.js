const express = require('express');
const TvShow = require('./TvShow');
const tvShowService = require('./tvShowService');

const tvShowRouter = express.Router();

tvShows = tvShowService.getAll();

tvShowRouter.get('/', (req, res) => {
  res.json(tvShows);
});

module.exports = tvShowRouter;
