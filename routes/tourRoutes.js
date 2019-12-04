const express = require('express');
const router = express.Router();

const {
  checkId,
  checkBody,
  getAllTours,
  createTour,
  getTour,
  updateTour,
  deleteTour
} = require('./../controllers/tourController');

// param middleware, only run when there params in url
router.param('id', checkId);

router
  .route('/')
  .get(getAllTours)
  .post(checkBody, createTour);
router
  .route('/:id')
  .get(getTour)
  .patch(updateTour)
  .delete(deleteTour);

module.exports = router;
