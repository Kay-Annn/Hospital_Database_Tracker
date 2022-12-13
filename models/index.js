//imports
const Floor = require("./Floor");
const User = require("./User");
const Employee = require("./Employee");
const Patient = require("./Patient");
//insert other table class model imports

//table relations

Floor.hasMany( Employee, {
    foreignKey: "floor_id"
});
Floor.hasMany( Patient, {
    foreignKey: "floor_id"
});

module.exports = {Floor, User, Patient, Employee};