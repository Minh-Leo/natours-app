const express = require('express');

const router = express.Router();
const { protect, restrictTo } = require('./../controllers/authController');
const {
  aliasTopTours,
  getTourStats,
  getMonthlyPlan,
  getAllTours,
  createTour,
  getTour,
  updateTour,
  deleteTour
} = require('./../controllers/tourController');
const reviewRouter = require('./../routes/reviewRoutes');

// param middleware, only run when there params in url
// router.param('id', checkId);

/* Nested route, Redirect this route to the reviewRouter, 
 then with mergeParams, reviewRouter got access to :tourId params*/
router.use('/:tourId/reviews', reviewRouter);

router.route('/top-5-cheap').get(aliasTopTours, getAllTours);
router.route('/tour-stats').get(getTourStats);
router.route('/monthly-plan/:year').get(getMonthlyPlan);
router
  .route('/')
  .get(protect, getAllTours)
  .post(createTour);
router
  .route('/:id')
  .get(getTour)
  .patch(updateTour)
  .delete(protect, restrictTo('admin', 'lead-guide'), deleteTour);

// router
//   .route('/:tourId/reviews')
//   .post(protect, restrictTo('user'), createReview);

module.exports = router;
