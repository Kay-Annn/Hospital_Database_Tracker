const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Floor extends Model {}

Floor.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    department: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    procedure: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'floor',
  }
);

module.exports = Floor;