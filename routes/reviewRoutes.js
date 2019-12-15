const express = require('express');

const router = express.Router();
const {
  getAllReviews,
  getReview,
  createReview
} = require('./../controllers/reviewController');
const { protect, restrictTo } = require('./../controllers/authController');

router
  .route('/')
  .get(protect, getAllReviews)
  .post(protect, restrictTo('user'), createReview);

router.route('/:id').get(protect, getReview);

module.exports = router;
