BEGIN;

DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  -- username VARCHAR(255) NOT NULL,
  user_password VARCHAR(255) NOT NULL
);

DROP TABLE IF EXISTS likes CASCADE;

CREATE TABLE likes (
  post_likes SERIAL PRIMARY KEY,
  g_each_post_likes INTEGER NOT NULL,
  s_each_post_likes INTEGER NOT NULL,
  c_each_post_likes INTEGER NOT NULL,
  s_each_post_dislikes INTEGER NOT NULL,
  g_each_post_dislikes INTEGER NOT NULL,
  c_each_post_dislikes INTEGER NOT NULL
);

DROP TABLE IF EXISTS stop_t CASCADE;

CREATE TABLE stop_t (
posts SERIAL PRIMARY KEY,
  stop_posts VARCHAR(800) NOT NULL,
  username_post VARCHAR(800) NOT NULL REFERENCES users(user_id),
);

DROP TABLE IF EXISTS go_t CASCADE;

CREATE TABLE go_t (
  posts SERIAL PRIMARY KEY,
    go_posts VARCHAR(800) NOT NULL,
    username_post VARCHAR(800) NOT NULL REFERENCES users(user_id)
);
DROP TABLE IF EXISTS continue_t CASCADE;

CREATE TABLE continue_t(
  posts SERIAL PRIMARY KEY,
    continue_posts VARCHAR(800) NOT NULL,
    username_post VARCHAR(800) NOT NULL REFERENCES USERS(user_id)
);
COMMIT;
