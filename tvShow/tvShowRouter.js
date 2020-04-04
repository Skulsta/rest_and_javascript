const express = require('express');
const TvShow = require('./TvShow');
const tvShowService = require('./tvShowService');

const tvShowRouter = express.Router();

tvShows = tvShowService.getAll();

tvShowRouter.get('/', (req, res) => {
  res.json(tvShows);
});

tvShowRouter.route('/:tvShowId').get((req, res) => {
  const tvShowId = req.params.tvShowId;
  tvShowResult = tvShowService.getById(tvShowId);
  console.log(tvShowService.getById(tvShowId));
  res.send(`Fetching TV Show with id ${tvShowId}. The result is: ${tvShowResult.name}.`);
});

module.exports = tvShowRouter;
