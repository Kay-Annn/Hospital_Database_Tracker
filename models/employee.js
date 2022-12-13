const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Employee extends Model {

}

Employee.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },

        role: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        floor_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "floor",
                key: "id"
            },
        },

        user_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            unique: true,
            model: 'User',
            key: 'id',

        }
    },
    {
        hooks: {

        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'Employee',
    }
);

module.exports = Employee;
