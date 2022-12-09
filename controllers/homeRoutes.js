const router = require('express').Router();
const { User } = require('../models');
const checkAuth = require('../utils/auth');

  
  // Use checkAuth middleware to prevent access to route
  router.get('/user', checkAuth, async (req, res) => {
    try {
      // Find the logged in user based on the session ID
      const userData = await User.findByPk(req.session.user_id, {
        attributes: { exclude: ['password'] },
        include: [{ model: Floor }],
      });
  
      const user = userData.get({ plain: true });
  
      res.render('user', {
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