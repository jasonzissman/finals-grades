var express = require('express');
var app = express();

app.use(express.static('finals-grades'));
app.listen(8080, function () {
  console.log('finals-grades is listening on 8080.');
});