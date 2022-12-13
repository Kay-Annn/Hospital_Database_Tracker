const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Patient extends Model {}

Patient.init(
  {
   id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    FirstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    LastName: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    Age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    
    Gender: {
      type: DataTypes.STRING,
      allowNull: false,
   },

    EmployeeAssigned: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    CheckInDate: {
        type: DataTypes.DATE,
        allowNull: false,
    },

    Procedure: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    PatientCost: {
        type: DataTypes.DECIMAL,
        allowNull: false,
    },
    
    floor_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "floor",
        key: "id"
      }
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'patient',
  }
);

module.exports = Patient;