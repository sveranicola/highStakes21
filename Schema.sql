CREATE DATABASE BlackJack;

\c BlackJack;

-- DROP TABLE users;

CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  userName text,
  wordPass text
)
