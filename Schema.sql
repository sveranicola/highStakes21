-- CREATE DATABASE BlackJack;

\c blackjack;

DROP TABLE users;

CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  userName text,
  wordPass text,
  lost boolean
)
