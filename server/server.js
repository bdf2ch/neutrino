var express = require('express');
var pg = require('pg');
var app = express();
var bodyParser = require('body-parser');
var users = require('./users');


var config = {
  user: 'docuser',
  database: 'phone',
  password: 'docasu',
  host: '10.50.0.242',
  port: 5432,
  max: 10,
  idleTimeoutMillis: 30000
};

var pool = new pg.Pool(config);
pool.on('error', function (err, client) {
  console.error('idle client error', err.message, err.stack)
});



app
  .use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Credentials', true);
    next();
  })
  .use(bodyParser.json())
  .post('/api', function (request, response, next) {
    console.dir(request.body);

    pool.connect(function(err, client, done) {
      if(err) {
        return console.error('error fetching client from pool', err);
      }

      var query;
      switch (request.body.action) {
        case 'getAllUsers': query = users.getAllUsers(); break;
        case 'getPortionOfUsers': query = users.getPortionOfUsers(request.body.data); break;
        case 'searchUsers': query = users.searchUsers(request.body.data); break;
      }

      client.query({ text: query['text'], values: query['values'] ? query['values'] : [] }, function(err, result) {
        done(err);
        if(err) {
          return console.error('error running query', err);
        }
        result = result.rows[0][query['func']];
        response.statusCode = 200;
        response.setHeader('Content-Type', 'application/json; charset=utf-8');
        response.end(JSON.stringify(result));
      });
    });

  })
  .listen(4444, function () {
    console.log('Server started at 4444');
  });
