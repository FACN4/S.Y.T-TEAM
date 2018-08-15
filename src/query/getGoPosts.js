const dbConnection = require('../database/dbconnection.js');
const tables = require('../database/build.sql');

const getGoPosts = (id_postsgc,cb) => {
  dbConnection.query('SELECT * FROM postsgc', (err, res) => {
    if (err) {
      cb(err);
    }
    if(post_go){
        cb(null,rows.res);
    }
  });
};

module.exports = { getGoPosts };
