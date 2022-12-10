//imports
const router = require("express").Router();
const floorRoutes = require("./floorRoutes");
const userRoutes = require("./userRoutes");
const  create  = require("./create");
//insert other table route imports


//turning on routing for possible CRUD operations on tables: User, floor, ...
router.use("/create", create);
router.use("/floors", floorRoutes);
router.use("/users", userRoutes);
//insert other table routes that need to be used/turned on


module.exports = router;
