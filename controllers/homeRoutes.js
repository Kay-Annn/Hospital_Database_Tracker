const router = require('express').Router();
const { User, Floor } = require('../models');
const checkAuth = require('../utils/auth');

router.get('/login', (req, res) => {

  // If the user is already logged in, redirect the request to homepage 
  if (req.session.logged_in) {
    res.redirect('/homepage');
    return;
  }
  res.render('login');
});


router.get('/homepage', checkAuth, async (req, res) => {

  const userInfo = await User.findOne({
    where: { username: req.session.user_id },
  });

  if (userInfo) {
    res.render('homepage', {
      username: userInfo.dataValues.username,
      logged_in: true
    });
  }
  else{
    res.redirect('/login');
  }
  
});


// Use checkAuth middleware to prevent access to route
router.get('/user', checkAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
    });

    const user = userData.get({ plain: true });

    res.render('homepage', {
      ...user,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/floors', checkAuth, async (req, res) => {

  const floorInfo = await Floor.findAll();

  const floorData = floorInfo.get({plain: true});

  if (floorInfo) {
    res.render('floorsPage', {
      ...floorData,
      username: userInfo.dataValues.username,
      logged_in: true
    });
  }
  else{
    res.redirect('/login');
  }
  
});

module.exports = router;