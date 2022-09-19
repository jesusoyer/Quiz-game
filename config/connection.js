
const Sequelize = require('sequelize');
require('dotenv').config();


console.log("beginning")
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });
console.log("ending" + process.env.DB_NAME)
module.exports = sequelize;