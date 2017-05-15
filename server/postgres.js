var pg = require('pg');


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
console.log('pool started');
pool.on('error', function (err, client) {
  console.error('idle client error', err.message, err.stack)
});


function query (text, parameters) {
  var poolLocal = pool;
  var promise =  new Promise((resolve, reject) => {
    poolLocal.connect(function(err, client, done) {
      if (err) {
        console.error('error fetching client from pool', err);
        reject(err);
      }
      client.query({text: text, values: parameters ? parameters : []}, function(err, result) {
          done(err);
          if(err) {
            console.error('error running query', err);
            reject(err);
          }
          resolve(result)
      });

    });
  });
  return promise;
};


module.exports = {
  query: query
};
