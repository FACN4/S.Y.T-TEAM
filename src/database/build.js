/* eslint-disable no-console */
const fs = require('fs');
const dbConnection = require('./dbconnection');
const userData = require('./data.json');

const addExampleDb = fs.readFileSync(`${__dirname}/build.sql`, 'utf-8');

const dbExample = (data) => {
  dbConnection.query(addExampleDb)=>{
      userData.forEach((user) => {
          dbConnection.query('INSERT INTO users (username,user_password) VALUES ($1,$2)', [user.username, user.user_password]
};
};
};

module.exports = dbExample;
