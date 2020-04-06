const Review = require('./Review');
const createId = require('../utils/idUtil');

class ReviewService {
  constructor() {
    this.reviews = [new Review(createId(), "Fantastic movie", 8, "e8076")];
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

  remove(reviewId) {
    this.reviews = this.reviews.filter(review => review.id !== reviewId);
  }

}

module.exports = new ReviewService();
