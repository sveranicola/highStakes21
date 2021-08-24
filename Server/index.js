let express = require('express');
let path = require('path');

let app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

const port =  3000;

app.listen(port, () => {
  console.log(`Listening on Port: ${port}`);
})