const express = require('express');

const router = express.Router();

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

// param middleware, only run when there params in url
// router.param('id', checkId);

router.route('/top-5-cheap').get(aliasTopTours, getAllTours);
router.route('/tour-stats').get(getTourStats);
router.route('/monthly-plan/:year').get(getMonthlyPlan);
router
  .route('/')
  .get(getAllTours)
  .post(createTour);
router
  .route('/:id')
  .get(getTour)
  .patch(updateTour)
  .delete(deleteTour);

module.exports = router;
