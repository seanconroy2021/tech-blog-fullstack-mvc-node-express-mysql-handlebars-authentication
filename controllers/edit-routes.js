const router = require("express").Router();

router.get("/", async (req, res) => {
    if (!req.session.loggedIn) {
        res.redirect("/login");
    } else {
        res.render("edit", {
            loggedIn: req.session.loggedIn,
            loggedInUserData: req.session.loggedInUserData,
        });
    }
});

module.exports = router;
