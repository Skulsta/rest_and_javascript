const express = require('express');
const reviewService = require('./reviewService');
const reviewRouter = express.Router();

reviewRouter.get('/', (req, res) =>  {
  res.json(reviewService.getAll());
});

reviewRouter.post('/', (req, res) => {
  const content =  req.body.content;
  const score =  req.body.score;
  const relatedItemId =  req.body.relatedItemId;
  const review = reviewService.create(content, score, relatedItemId);
  res.status(201).json(review);
})

module.exports = reviewRouter;
