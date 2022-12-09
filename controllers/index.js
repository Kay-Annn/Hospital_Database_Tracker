//imports
const router = require("express").Router();
const apiRoutes = require("./api");
//insert other route imports (homepage, dashboard, etc)
router.use('/user', homeRoutes);

//turning on routes for api endpoints, ...
router.use("/api", apiRoutes);


router.use((req, res) => {//404 redirect
    res.status(404).end();
});

module.exports = router;

