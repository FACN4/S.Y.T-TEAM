const dbConnection = require('../database/dbconnection.js');
const tables = require('../database/build.sql');

const getStopPosts = (cb) => {
  dbConnection.query('SELECT * FROM postsgc', (err, res) => {
    if (err) {
      cb(err);
    }
    if(post_stop){
      console.log(res);
    }
  });
};

module.exports = { getStopPosts };
