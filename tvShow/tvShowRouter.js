// Handle everything web related that has to do with the tv show resource

const express = require('express');
const tvShowService = require('./tvShowService');
const tvShowRouter = express.Router();

tvShowRouter.get('/', (req, res) => {
  res.json(tvShowService.getAll());
});

tvShowRouter.route('/:tvShowId')
  .get((req, res) => {
  const tvShowId = req.params.tvShowId;
  const tvShowResult = tvShowService.getById(tvShowId);
  res.send(`Fetching TV Show with id ${tvShowId}. The result is: ${tvShowResult.name}.`);
  })
  .delete((req, res) => {
    const tvShowId = req.params.tvShowId;
    tvShowService.remove(tvShowId);
    res.json(tvShowService.getAll());
  })
  .put((req, res) => {
    const tvShow = tvShowService.update(req.params.tvShowId, req.body);
    res.send(tvShow);
  });

tvShowRouter.post('/', (req, res) => {
  const name = req.body.name;
  const genre = req.body.genre;
  const newTvShow = tvShowService.createTvShow(name, genre);
  res.send(newTvShow);

});

module.exports = tvShowRouter;
