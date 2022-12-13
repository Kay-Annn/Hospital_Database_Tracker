//imports
const Floor = require("./Floor");
const User = require("./User");
const Employee = require("./Employee");
const Patient = require("./Patient");
//insert other table class model imports

//table relations

Employee.belongsTo(User, {
    foreignKey: 'user_id',
});

// Categories have many Products
User.hasMany(Employee, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

Employee.belongsTo(Floor, {
    foreignKey: "floor_id",
});

Floor.hasMany(Employee, {
    foreignKey: "floor_id"
});

Patient.belongsTo(Floor, {
    foreignKey: "floor_id",
});

Floor.hasMany(Patient, {
    foreignKey: "floor_id"
});

module.exports = { Floor, User, Patient, Employee };
