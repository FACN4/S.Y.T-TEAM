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
 post_id VARCHAR(800) NOT NULL,
 username_id INTEGER REFERENCES users(user_id),
 like_type INTEGER NOT NULL
);

DROP TABLE IF EXISTS sgc_t CASCADE;

CREATE TABLE sgc_t (
id_post SERIAL PRIMARY KEY,
  post_content VARCHAR(800) NOT NULL,
  username_id INTEGER REFERENCES users(user_id),
  post_type VARCHAR(800) NOT NULL
);

INSERT INTO users (username,user_password) VALUES ('Sol' ,'no11wayreally8');
INSERT INTO users (username,user_password) VALUES ('Sara' ,'no1454rdh5');


COMMIT;
