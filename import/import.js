var pg = require('pg');
var async = require('async');

if(typeof require !== 'undefined') XLSX = require('xlsx');
var workbook = XLSX.readFile('ArcticEnergo.xls');

var first_sheet_name = workbook.SheetNames[0];
var address_of_cell = 'A1';

/* Get worksheet */
var worksheet = workbook.Sheets[first_sheet_name];

console.dir(worksheet.A36);


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
  console.error('idle client error', err.message, err.stack);
});


for (var i = 1; i < 37; i++) {
  var fio = worksheet['A' + i].w.trim().split(' ');
  var mobile = worksheet['B' + i] !== undefined ? worksheet['B' + i].w : '';
  var phones = worksheet['C' + i] !== undefined ? worksheet['C' + i].w.trim() : '';
  var position = worksheet['D' + i].w.trim();
  var divisionId = parseInt(worksheet['E' + i].w);
  console.log(fio, mobile, phones, position, divisionId);


  pool.connect(function(err, client, done) {
    if(err) {
      return console.error('error fetching client from pool', err);
    }

    client.query({
      text: 'SELECT * FROM contacts WHERE surname = $1 AND name = $2 AND fname = $3 AND division_id = $4',
      values: [fio[0], fio[1], fio[2], divisionId]},
      function(err, result) {
        done(err);
        if(err) {
          console.error('error running query', err);
          return;
        }
        console.log(result.rows);
        addContact(0, divisionId, fio[0], fio[1], fio[2], position, '', mobile, '', 0);
        /*
        if (result.rows.length === 0 ) {
          client.query({
              text: 'select add_contact($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)',
              values: [0, divisionId, fio[0], fio[1], fio[2], position, '', '', mobile, 0]},
            function(err2, result2) {
              done(err2);
              if(err2) {
                console.error('error running query', err2);
                return;
              }
              console.log(result2.rows);

            });


        }
        */
    });
  });
}




function addContact(userId, divisionId, surname, name, fname, position, email, mobile, photo, order) {
  pool.connect(function(err, client, done) {
    if(err) {
      return console.error('error fetching client from pool', err);
    }

    client.query(
      {
        text: 'select add_contact($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)',
        values: [userId, divisionId, surname, name, fname, position, email, photo, mobile, order]
      },
      function(err, result) {
        done(err);
        if(err) {
          console.error('error running query', err);
          return;
        }
        console.log(result.rows[0] + ' ADDED');
      });
  });
};




async.eachSeries([0, 1, 2, 3, 4], function(i, callback) {
  console.log("!"+i);
  query("SELECT EXTRACT('epoch' FROM alert_time)::integer alert_time, alert_id, alert_lat, alert_lon, alert_str, alert_cc, alert_distance FROM blitz_device_former_alerts WHERE alert_locid = $1", [first.device_locid], function(error_a,rows_a,result_a) {
    console.log(i+"!");
    ret.push(i);
    callback(null);  // null -> no error
  });

}, function(err) {
  console.log("-END---"+JSON.stringify(ret));
  ret.push(first);
  res.end(JSON.stringify(ret));
});
