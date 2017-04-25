const router = require('./router');

const express = require('express');
const http = require('http');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'templates'));
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', router);

http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});
