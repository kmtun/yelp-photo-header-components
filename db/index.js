const sequelize = require('sequelize');
const db = new sequelize('yelp', 'Kevin', '', {
  host: 'localhost',
  dialect: 'postgres',
})

db.authenticate()
  .then(() => {
    console.log('Database has been established successfully');
  })
  .catch(err => {
    console.log('Unable to connect to database: ', err);
  })

  module.exports = {
    db
  }
  const schema = require('./sql/schema.js');