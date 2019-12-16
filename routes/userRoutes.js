const express = require('express');

const router = express.Router();
const {
  signup,
  login,
  updatePassword,
  forgotPassword,
  resetPassword,
  protect,
  restrictTo
} = require('./../controllers/authController');
const {
  getAllUsers,
  getUser,
  createUser,
  getMe,
  updateUser,
  deleteUser,
  updateMe,
  deleteMe
} = require('./../controllers/userController');

// Route for public
router.post('/signup', signup);
router.post('/login', login);
router.post('/forgotPassword', forgotPassword);
router.patch('/resetPassword/:token', resetPassword);

// Route for logged in user
// Only proceed if passed middelware protect
router.use(protect);
// then go below
router.get('/me', getMe, getUser);
router.patch('/updateMyPassword', updatePassword);
router.patch('/updateMe', updateMe);
router.delete('/deleteMe', deleteMe);

// Route for only Admin
router.use(restrictTo('admin'));
router
  .route('/')
  .get(getAllUsers)
  .post(createUser);
router
  .route('/:id')
  .get(getUser)
  .patch(updateUser)
  .delete(deleteUser);

module.exports = router;
