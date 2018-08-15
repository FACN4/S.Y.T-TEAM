/* eslint-disable no-console */
const fs = require('fs');
const dbConnection = require('./dbconnection');
// const userData = require('./data.json');

const addExampleDb = fs.readFileSync(`${__dirname}/build.sql`, 'utf-8');
dbConnection.query(addExampleDb, (error, data) => {
  if (error) {
    console.log('error', error);
  } else {
    console.log(data);
  }
});

module.exports = addExampleDb;
