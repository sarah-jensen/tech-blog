const router = require('express').Router();
const { User } = require('../../models');

// /api/users endpoint
router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({ where: { username: req.body.username } });
        const validPassword = await userData.checkPassword(req.body.password);

        if (!username || !validPassword) {
            res.status(403).json({ message: 'Incorrect username or password, please try again' });
            return;
        }
    req.session.save(() => {
        req.session.username = userData.username;
        req.session.user_id = userData.id;
        req.session.logged_in = true;

        res.json({ user: userData, message: 'You are now logged in!' });
    });
    } catch (err) {
        res.status(500).json(err);
    }
})
//logout user
router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  });

//CREATE new user
router.post('/signup', async (req, res) => {
    try {
        const userData = await User.create({
            username: req.body.username,
            password: req.body.password,
        });

        req.session.save(() => {
            req.session.username = userData.username;
            eq.session.user_id = userData.id;
            req.session.logged_in = true;

            res.status(200).json({user: userData, message: 'You are now logged in!'});
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});


module.exports = router;
