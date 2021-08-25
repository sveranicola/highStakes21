const { Client } = require('pg');

const client = new Client({
  host: 'localhost',
  port: 5432,
  database: 'blackjack'
})


client.on('error', (err, client) => {
  console.log(err)
});

client.connect();

module.exports = client;