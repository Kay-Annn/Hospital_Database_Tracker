const router = require('express').Router();
const { User, Floor, Employee, Patient } = require('../models');
const { getAttributes } = require('../models/Floor');
const checkAuth = require('../utils/auth');

router.get('/login', (req, res) => {
  console.log("incomming login",JSON.stringify(req.session))
  // If the user is already logged in, redirect the request to homepage 
  if (req.session.logged_in) {
    res.redirect('/homepage');
    return;
  }

  //renders the handlebar template
  res.render('login');
});


router.get('/', (req, res) => {

  // If the user is already logged in, redirect the request to homepage 
  if (req.session.logged_in) {
    res.redirect('/homepage');
    return;
  }
  //renders the handlebar template
  res.render('signup');
});

router.get('/homepage', checkAuth, async (req, res) => {
  console.log("incomiing session",JSON.stringify(req.session))
  const userInfo = await User.findOne({
    where: { username: req.session.user_id },
    include: { model: Employee },
  });


  const doctorsInfo = await User.findAll({
    limit: 2,
    include: { model: Employee },
  })

  const listOfPatients = await Patient.findAll({
    limit: 4,
  })

  const doctors = doctorsInfo.map((doc) => doc.get({ plain: true }));
  const listOfpatients = listOfPatients.map((pat) => pat.get({ plain: true }));
 

  if (userInfo) {
    res.render('homepage', {
      username: userInfo.dataValues.username,
      logged_in: true,
      topDoctors: doctors,
      patientList:listOfpatients
    });
  }
  else {
    res.redirect('/login');
  }

});

router.get('/floors', checkAuth, async (req, res) => {

  const floorInfo = await Floor.findAll({
    include: { model: Patient },
    // { attributes: ["id", "department", "procedure"] }
});
 

  const floorData = floorInfo.map((floor) => floor.get({ plain: true }));

  if (floorInfo) {
    res.render('floorsPage', {
      floorInfo: floorData, 
      logged_in: true
    });
  }

  else {
    res.redirect('/login');
  }

});

router.get('/patients', checkAuth, async (req, res) => {

  res.render('patient', {
    logged_in: true
  });
});



module.exports = router;