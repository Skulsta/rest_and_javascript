const express = require('express');
const tvShowService = require('./tvShowService');

const tvShowRouter = express.Router();

const tvShows = tvShowService.getAll();

tvShowRouter.get('/', (req, res) => {
  res.json(tvShows);
});

tvShowRouter.route('/:tvShowId').get((req, res) => {
  const tvShowId = req.params.tvShowId;
  const tvShowResult = tvShowService.getById(tvShowId);
  res.send(`Fetching TV Show with id ${tvShowId}. The result is: ${tvShowResult.name}.`);
});

tvShowRouter.post('/', (req, res) => {

});

module.exports = tvShowRouter;
