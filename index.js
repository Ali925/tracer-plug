var express = require('express');
var app = express();

app.use(cors());

app.set('port', (process.env.PORT || 3000));

app.get('/', function (req, res) {
  res.send('beli');
});

app.listen(app.get('port'), function () {
  console.log('Example app listening on port 3000!');
});