const express = require('express');
const {
  getOverview,
  getTour,
  getLoginForm,
  getAccount,
  getMyTours,
  updateUserData,
  alerts
} = require('./../controllers/viewsController');
const { isLoggedIn, protect } = require('./../controllers/authController');
// const { createBookingCheckout } = require('./../controllers/bookingController');

const router = express.Router();

router.use(alerts);

router.get('/', /*createBookingCheckout,*/ isLoggedIn, getOverview);
router.get('/tour/:slug', isLoggedIn, getTour);
router.get('/login', isLoggedIn, getLoginForm);
router.get('/me', protect, getAccount);
router.get('/my-tours', protect, getMyTours);

router.patch('/submit-user-data', protect, updateUserData);
// router.get('/signup', getSignupForm);

module.exports = router;
