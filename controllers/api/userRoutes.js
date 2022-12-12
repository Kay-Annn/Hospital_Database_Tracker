const router = require('express').Router();
const { User } = require('../../models');



router.post('/login', async (req, res) => {
  try {
    
    // check user e-mail exist
    const userInfo = await User.findOne({
      where: { email: req.body.email },
    });

    if (!userInfo) {
      res.status(400).json({ message: 'email incorrect, please try again' });
      return;
    }

    
    req.session.save(() => {
      req.session.user_id = userInfo.username;      
      req.session.logged_in = true;
    });

    res.render('homepage');
  
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});



module.exports = router;