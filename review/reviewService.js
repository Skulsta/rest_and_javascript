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

}

module.exports = new ReviewService();
