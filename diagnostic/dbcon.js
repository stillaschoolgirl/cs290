var mysql = require('mysql');
var pool = mysql.createPool({
  connectionLimit : 10,
  host            : 'classmysql.engr.oregonstate.edu',
  user            : 'cs290_willemsb',
  password        : '0624',
  database        : 'cs290_willemsb'
});

module.exports.pool = pool;
