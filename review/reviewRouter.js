const express = require('express');
const reviewService = require('./reviewService');
const reviewRouter = express.Router();

reviewRouter.get('/', (req, res) =>  {
  res.json(reviewService.getAll());
});

module.exports = reviewRouter;
