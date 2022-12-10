const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

if (process.env.JAWSDB_URL) {//Heroku
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {//Localhost
  sequelize = new Sequelize(
   'test',
  'test',
  'zLRdcdzc8ayJSfEA',
    {
      host: '101.201.123.36',
      dialect: 'mysql',
      port: 3306
    }
  );
}

module.exports = sequelize;
