//imports
const router = require("express").Router();
const floorRoutes = require("./floorRoutes");
const userRoutes = require("./userRoutes");
const employeeRoutes = require("./employee");
//insert other table route imports


//turning on routing for possible CRUD operations on tables: User, floor, ...
router.use("/floors", floorRoutes);
router.use("/users", userRoutes);
router.use("/employee", employeeRoutes);
//insert other table routes that need to be used/turned on


module.exports = router;
