const router = require('express').Router();
const { User, Floor, Employee } = require('../models');
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

  const doctorsInfo = await Employee.findAll({
    limit: 2,
    include: { model: User },
  })

  const topDocDetails = [
    {
    docName: "John",
    docDepartment: "Cardiology",
  },

  {
    docName: "Tracy",
    docDepartment: "Cardiology",
  },

]

  console.log("I am checking", doctorsInfo)

  if (userInfo) {
    res.render('homepage', {
      username: userInfo.dataValues.username,
      logged_in: true,
      topDoctors: topDocDetails
    });
  }
  else {
    res.redirect('/login');
  }

});

router.get('/floors', checkAuth, async (req, res) => {

  const floorInfo = await Floor.findAll();

  const floorData = floorInfo.get({ plain: true });

  if (floorInfo) {
    res.render('floorsPage', {
      ...floorData,
      username: userInfo.dataValues.username,
      logged_in: true
    });
  }
  else {
    res.redirect('/login');
  }

});

module.exports = router;