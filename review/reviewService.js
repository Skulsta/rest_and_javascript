const Review = require('./Review');
const createId = require('../utils/idUtil');

class ReviewService {
  constructor() {
    this.reviews = [];
  }

  create(content, score, relatedItemId) {
    const newReview = new Review(createId(), content, score, relatedItemId);
    this.reviews.push(newReview);
    return newReview;
  }

  getAll() {
    return this.reviews;
  }

  getReview(reviewId) {
    return this.reviews.find(review => review.id == reviewId);
  }

}

module.exports = new ReviewService();
