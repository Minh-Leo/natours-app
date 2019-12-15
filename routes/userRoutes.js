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
  updateUser,
  deleteUser,
  updateMe,
  deleteMe
} = require('./../controllers/userController');

router.post('/signup', signup);
router.post('/login', login);

router.patch('/updateMyPassword', protect, updatePassword);
router.post('/forgotPassword', forgotPassword);
router.patch('/resetPassword/:token', resetPassword);

router.patch('/updateMe', protect, updateMe);
router.delete('/deleteMe', protect, deleteMe);

router.route('/').get(getAllUsers);
router
  .route('/:id')
  .get(getUser)
  .patch(protect, restrictTo('admin'), updateUser)
  .delete(deleteUser);

module.exports = router;
