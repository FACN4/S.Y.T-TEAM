const dbConnection = require('../database/dbconnection.js');

const getConPosts = (cb) => {
  dbConnection.query('SELECT * FROM postsgc', (err, res) => {
    if (err) {
      cb(err);
    }
    if(post_continue){
      console.log(res);
    }
  });
};

module.exports = { getConPosts };
