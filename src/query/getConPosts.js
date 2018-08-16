const dbConnection = require('../database/dbconnection.js');
const tables = require('../database/build.js');

const getConPosts = (id_postsgc,cb) => {
  dbConnection.query('SELECT * FROM sgcpost', (err, res) => {
    if (err) {
      cb(err);
    }
    if(post_continue){
      cb(null,rows.res);
    }
  });
};

module.exports = { getConPosts };
