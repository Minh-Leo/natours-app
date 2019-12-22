const express = require('express');

const router = express.Router({ mergeParams: true });

const {
  getCheckoutSession,
  createBooking,
  getAllBookings,
  getBooking,
  updateBooking,
  deleteBooking
} = require('./../controllers/bookingController');
const { protect, restrictTo } = require('./../controllers/authController');

router.use(protect);

router.get('/checkout-session/:tourId', protect, getCheckoutSession);

router.use(restrictTo('admin', 'lead-guide'));
router
  .route('/')
  .get(getAllBookings)
  .post(createBooking);
router
  .route('/:id')
  .get(getBooking)
  .patch(updateBooking)
  .delete(deleteBooking);

module.exports = router;
