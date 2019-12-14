const express = require('express');

const router = express.Router();
const {
  signup,
  login,
  updatePassword,
  forgotPassword,
  resetPassword,
  protect
} = require('./../controllers/authController');
const {
  getAllUsers,
  createUser,
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
