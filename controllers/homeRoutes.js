const router = require('express').Router();
const { User, Floor  } = require('../models');
const checkAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    // Get all users 
    const userData = await User.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    // Pass serialized data and session flag into template
    res.render('homepage', { 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


  
  // Use checkAuth middleware to prevent access to route
  router.get('/user', checkAuth, async (req, res) => {
    try {
      // Find the logged in user based on the session ID
      const userData = await User.findByPk(req.session.user_id, {
        attributes: { exclude: ['password'] },
        include: [{ model: Floor }],
      });
  
      const user = userData.get({ plain: true });
  
      res.render('homepage', {
        ...user,
        logged_in: true
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to user route
    if (req.session.logged_in) {
      res.redirect('/user');
      return;
    }
  
    res.render('login');
  });

module.exports = router;