const dbConnection = require('../database/dbconnection.js');

const getGoPosts = (cb) => {
  dbConnection.query('SELECT * FROM postsgc', (err, res) => {
    if (err) {
      cb(err);
    }
    if(post_go){
      console.log(res);
    }
  });
};

module.exports = { getGoPosts };
