var express = require('express');
var pg = require('pg');
var app = express();

var config = {
  user: 'docuser',
  database: 'phone',
  password: 'docasu',
  host: '10.50.0.242',
  port: 5432,
  max: 10,
  idleTimeoutMillis: 30000
};


/*
var pool = new pg.Pool(config);
pool.connect(function(err, client, done) {
  if(err) {
    return console.error('error fetching client from pool', err);
  }
  client.query('SELECT get_divisions()', [], function(err, result) {
    done(err);
    if(err) {
      return console.error('error running query', err);
    }
    console.log(result.rows[0]);
    res = result.rows[0];
    response.statusCode = 200;
    response.setHeader('Content-Type', 'application/json; charset=utf-8');
    response.end(JSON.stringify(res));
    //output: 1
  });
});

pool.on('error', function (err, client) {
  console.error('idle client error', err.message, err.stack)
});
*/


app
  .get('/api', function (request, response) {
    //console.log(request);
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.send('test');
  })
  .listen(4444, function () {
    console.log('Server started at 4444');
  });
