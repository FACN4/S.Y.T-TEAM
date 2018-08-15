const dbConnection = require('../database/dbconnection.js');
const tables = require('../database/build.js');

const getStopPosts = (id_postsgc,cb) => {
  dbConnection.query('SELECT * FROM postsgc', (err, res) => {
    if (err) {
      cb(err);
    }
    if(post_stop){
      cb(null,rows.res);
    }
  });
};

module.exports = { getStopPosts };
