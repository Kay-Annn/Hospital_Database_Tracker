const router = require('express').Router();
const { User, Employee } = require('../../models');

router.get('/health', async (req, res) => {
  try {
    const check = {
      message: 'OK',
      timestamp: Date.now()
    };
    res.send(check);
  } catch (err) {
    res.status(500).json(err);
  }
});


router.post('/getUser', async (req, res) => {
  try {

    // check user e-mail exist
    const userInfo = await User.findOne({
      where: { email: req.body.email },
    });

    if (!userInfo) {
      res.status(400).json({ message: 'email incorrect, please try again' });
      return;
    }

    const validPassword = userInfo.checkPassword(req.body.password);


    if (!validPassword) {
      console.log(req.body.password)
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userInfo.username;
      req.session.logged_in = true;

      res.status(200).json(userInfo);
    });

  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});



router.post('/signupUser', async (req, res) => {
  try {
    // check user e-mail exist
    console.log(req.body.username)
    const userInfo = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    }
    );

    console.log(userInfo)

    if (userInfo.dataValues) {
      const role = await Employee.create({
        role: req.body.role,
        user_id: userInfo.dataValues.id
      }
      );
    }



    req.session.save(() => {
      req.session.user_id = userInfo.username;
      req.session.logged_in = true;

      res.status(200).json(userInfo);
    });

  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});


router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    // Remove the session variables
    req.session.destroy(() => {
      res.status(200).end();
    });

  } else {
    res.status(404).end();
  }
});

module.exports = router;