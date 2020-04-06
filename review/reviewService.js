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

  update(reviewId, updatedReview) {
    this.reviews = this.reviews
      .map(review => {
        if (review.id === reviewId) {
          return Object.assign({}, review,  updatedReview);
        }
        return review;
      });
    return this.getReview(reviewId);
  }

}

module.exports = new ReviewService();
