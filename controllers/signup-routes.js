const router = require('express').Router();

// render handlebars view on page load
router.get('/', async (req, res) => {
  res.render('signup', {
    loggedIn: req.session.loggedIn,
    loggedInUserData: req.session.loggedInUserData,
  });
});

module.exports = router;
