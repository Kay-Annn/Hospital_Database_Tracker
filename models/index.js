//imports
const Floor = require("./Floor");
const User = require("./User");
const Employee = require("./employee");
const { belongsTo } = require("./Floor");
//insert other table class model imports

//table relations

Employee.belongsTo(User,{
    foreignKey:'user_id',
  });

// Categories have many Products
User.hasMany(Employee,{
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
    });

module.exports = {Floor, User, Employee /*, ... */};