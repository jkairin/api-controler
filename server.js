var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./routes/tweetRequestRoutes');
routes(app);

app.listen(port);

console.log('SimpleRTAppAPI server started on: ' + port);
