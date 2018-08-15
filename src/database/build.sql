BEGIN;

DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  user_password VARCHAR(255) NOT NULL
  -- user_avatar
);

DROP TABLE IF EXISTS likes CASCADE;

CREATE TABLE likes (
 id_like SERIAL PRIMARY KEY,
 likes INTEGER NOT NULL,
 dislikes INTEGER NOT NULL,
 post_type VARCHAR(800) NOT NULL REFERENCES postsgc(post_go,post_continue,post_stop)
);

DROP TABLE IF EXISTS postsgc CASCADE;

CREATE TABLE postsgc (
id_postsgc SERIAL PRIMARY KEY,
  post_go VARCHAR(800) NOT NULL ,
  post_continue VARCHAR(800) NOT NULL,
  post_stop VARCHAR(800) NOT NULL,
  username_id INTEGER REFERENCES users(user_id)
);

INSERT INTO users (username,user_password) VALUES ('Sol' ,'no11wayreally8');
INSERT INTO users (username,user_password) VALUES ('Sara' ,'no1454rdh5');


COMMIT;
