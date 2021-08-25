const client = require('../index.js');

module.exports = {
  createUser: ({username, wordpass}, callback) => {
    var psql = `INSERT INTO users (username, wordpass, lost) VALUES ('${username}', '${wordpass}', false)`;

    client.query (psql)
    .then(data => callback(null, true))
    .catch(err => callback(err));
  },
  checkUser: ({username, wordpass}, callback) => {
    var psql = `SELECT * FROM users WHERE username = '${username}' AND wordpass= '${wordpass}'`;

    client.query (psql)
    .then(data => callback(null, data))
    .catch(err => callback(err));
  },
  availableUser: ({username, wordpass}, callback) => {
    var psql = `SELECT EXISTS (SELECT 1 FROM users WHERE username = '${username}')`;

    client.query (psql)
    .then(data => callback(null, data))
    .catch(err => callback(err));
  },
  loserAlert: ({username}, callback) => {
    var psql = `UPDATE users SET lost = true WHERE username = '${username}'`;

    client.query (psql)
    .then(data => callback(null, true))
    .catch(err => callback(err));
  }
}