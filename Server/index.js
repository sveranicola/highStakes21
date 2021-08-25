let express = require('express');
let path = require('path');
let db = require('../db/queries/users.js');

let app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

app.post('/createUser', (req, res) => {
  db.createUser(req.body, (err, result) => {
    if (err) {
      throw err;
    } else {
      res.status(201).send('Success!');
    }
  });
});

app.get('/getUser', (req, res) => {
  db.checkUser(req.params, (err, result) => {
    if (err) {
      throw err;
    } else {
      res.send(result.rows);
    }
  });
});

app.get('/availableUser', (req, res) => {
  var request = JSON.parse(req.query[0]);
  db.availableUser(request.username, request.wordpass, (err, result) => {
    if (err) {
      throw err;
    } else {
      res.send(result.rows[0]);
    }
  });
});

app.put('/userLost', (req, res) => {
  db.loserAlert(req.params, (err, result) => {
    if (err) {
      throw err;
    } else {
      res.status(204).send('User Updated');
    }
  });
});

const port =  3000;

app.listen(port, () => {
  console.log(`Listening on Port: ${port}`);
})