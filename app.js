const express = require("express");

var app = express();

var api = require('./api/routes/api');

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended : true}));

// parse application/json
app.use(bodyParser.json());

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use('/api', api);

app.listen(port, function() {
  console.log("✔ Express server listening on port %d in %s mode", port, app.get('env'));
});