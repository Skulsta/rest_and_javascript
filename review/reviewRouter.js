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
});

reviewRouter.route('/:reviewId')
  .get((req, res) => {
    const reviewId = req.params.reviewId;
    const review = reviewService.getReview(reviewId);
    res.send(`Looking for review with Id # ${reviewId}.
    Review for x movie:
    ${review.content}
    Score: ${review.score}`)
  })
  .put((req, res) => {
    const reviewId = req.params.reviewId;
    res.send(reviewService.update(reviewId, req.body));
  });


module.exports = reviewRouter;
