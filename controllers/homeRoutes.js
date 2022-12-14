const router = require('express').Router();
const { User, Floor } = require('../models');
const { getAttributes } = require('../models/Floor');
const checkAuth = require('../utils/auth');

router.get('/login', (req, res) => {

  // If the user is already logged in, redirect the request to homepage 
  if (req.session.logged_in) {
    res.redirect('/homepage');
    return;
  }

  //renders the handlebar template
  res.render('login');
});


router.get('/signup', (req, res) => {

  // If the user is already logged in, redirect the request to homepage 
  if (req.session.logged_in) {
    res.redirect('/homepage');
    return;
  }

  //renders the handlebar template
  res.render('signup');
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
  else {
    res.redirect('/login');
  }

});

router.get('/floors', checkAuth, async (req, res) => {

  const floorInfo = await Floor.findAll(
    {attributes: ["id", "department", "procedure"]}
  );
  console.log(floorInfo);
  //const floorData = floorInfo.get({ plain: true });

  if (floorInfo) {
    res.render('floorsPage', {
      floorInfo,
      logged_in: true
    });
  }
  else {
    res.redirect('/login');
  }

});

module.exports = router;