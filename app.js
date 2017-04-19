var router = require('./router');

var express = require('express');
var http = require('http');
var path = require('path');
var app = express();

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'templates'));
app.use('/', router);

http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});