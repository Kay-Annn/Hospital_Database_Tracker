//imports
const router = require("express").Router();
const apiRoutes = require('./api');
const homeRoutes = require("./homeRoutes")

//insert other route imports (homepage, dashboard, etc)
router.use('/homeRoutes', homeRoutes);

//turning on routes for api endpoints, ...
router.use("/api", apiRoutes);



module.exports = router;

