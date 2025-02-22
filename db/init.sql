
-- Drop everything
DROP SCHEMA public CASCADE;
CREATE SCHEMA public;


CREATE TYPE difficulty_val AS ENUM ('easy', 'medium', 'hard');


CREATE TABLE topics (
    id SERIAL PRIMARY KEY,
    topic VARCHAR(32) NOT NULL UNIQUE
);


CREATE TABLE grind_169_problems (
    id SERIAL PRIMARY KEY,
    title VARCHAR(64) NOT NULL,
    link VARCHAR(128) NOT NULL,
    difficulty difficulty_val NOT NULL,
    topic_id INT NOT NULL,
    goal_time INT NOT NULL,
    is_premium BOOLEAN NOT NULL,
    FOREIGN KEY (topic_id) REFERENCES topics(id)
);

CREATE TABLE user_attempts (
    id SERIAL PRIMARY KEY,
    attempt_time INT NOT NULL 
)