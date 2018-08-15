const dbConnection = require('../database/dbconnection.js');
const tables = require('../database/build.js');

const getPostLikes = (id_postsgc,cb) => {
  dbConnection.query('SELECT * FROM likes', (err, res) => {
    if (err) {
      cb(err);
      }
      if(post_type.likes===post_go){
      cb(null,rows.res);
      }
      if(post_type.dislikes===post_go){
      cb(null,rows.res);
      }
      else if(post_type.likes===post_stop){
      cb(null,rows.res);
      }
      if(post_type.dislikes===post_stop){
      cb(null,rows.res);
      }
      else if(post_type.likes===post_continue){
      cb(null,rows.res);
      }
      if(post_type.dislikes===post_continue){
      cb(null,rows.res);
      }
      }
    });

module.exports = { getPostLikes };
