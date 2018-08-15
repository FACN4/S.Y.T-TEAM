const dbConnection = require('../database/dbconnection.js');

const getPostLikes = (cb) => {
  dbConnection.query('SELECT * FROM likes', (err, res) => {
    if (err) {
      cb(err);
      }
      if(post_type.likes===post_go){
      console.log(res);
      }
      if(post_type.dislikes===post_go){
      console.log(res);
      }
      else if(post_type.likes===post_stop){
        console.log(res);
      }
      if(post_type.dislikes===post_stop){
        console.log(res);
      }
      else if(post_type.likes===post_continue){
        console.log(res);
      }
      if(post_type.dislikes===post_continue){
        console.log(res);
      }
      }
    });

module.exports = { getPostLikes };
