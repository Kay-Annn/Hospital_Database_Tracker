const {Model, DataTypes} = require('sequelize');
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

        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        role: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        email: {
            type: DataTypes.STRING,
            allowNull: true,
            unique: true,
            defaultValue: '',

        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [6],
            },
        },
        floor_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "floor",
                key: "id"
            },
        },
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
