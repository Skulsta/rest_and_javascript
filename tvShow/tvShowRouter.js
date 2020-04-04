const express = require('express');
const TvShow = require('./TvShow');

const tvShowRouter = express.Router();

const tvShows = [new TvShow(1, 'Mr. Robot', 'Drama'), new TvShow(2, 'Black Mirror', 'Drama')];

tvShowRouter.get('/', (req, res) => {
  res.json(tvShows);
});

module.exports = tvShowRouter;
