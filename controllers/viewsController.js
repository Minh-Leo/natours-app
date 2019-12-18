const Tour = require('./../models/tourModel');
const catchAsync = require('./../utils/catchAsync');

exports.getOverview = catchAsync(async (req, res, next) => {
  // 1. get tour data from collection
  const tours = await Tour.find();

  // 2.build template
  // 3.render that template using tour data from 1
  res.status(200).render('overview', {
    title: 'All Tours',
    tours
  });
});

exports.getTour = catchAsync(async (req, res, next) => {
  // 1.Get data for requested tour, include reviews and guides
  const tour = await Tour.findOne({ slug: req.params.slug }).populate({
    path: 'reviews',
    fields: 'review rating user'
  });

  // 2.template
  // 3.render template using data

  res.status(200).render('tour', {
    title: `${tour.name} Tour`,
    tour
  });
});

exports.getLoginForm = (req, res) => {
  res.status(200).render('login', {
    title: `Log into your account`
  });
};
// exports.getSignupForm = (req, res) => {
//   res.status(200).render('signup', {
//     title: `Create new account`
//   });
// };
