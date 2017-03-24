const mysql = require('mysql');

// const connection = mysql.createConnection('mysql://root:@localhost/node_dbdb?debug=true&charset=BIG5_CHINESE_CI&timezone=-0700');

const connection = mysql.createConnection({
    host:   'localhost',
    user:   'root',
    password: '',
    database : 'node_db'
});

connection.connect(function(err) {
  if (err) {
    return console.log('Unable to connect to mysql Server');
  }
 
  console.log('connected to mysql Server');


// //Inserting Data into Mysql Database Users Table
//   var post = {
//       id: '',
//       name: 'Kamran Saeed',
//       password: 'abc123',
//       status: 'Active'

//   };

//   var query = connection.query('INSERT INTO user SET ?', post, function (error, results, fields) {
//        if (error) throw error;
//   // Neat! 
// });
// console.log(query.sql); // INSERT INTO posts SET `id` = 1, `title` = 'Hello MySQL' 
 

//  //Fetching Data From Mysql Database User Table

//  var string = 'SELECT * From user';

//  var res = connection.query(string, function(err, results, fields){
//      if(err){
//          return console.log('Unable To Fetch Data From Table');
//      }
// //      for (var i in results){
// //      console.log(results[i]);
// //  }
//     console.log(results[1]);
//     console.log(fields[3]);

//     // error will be an Error if one occurred during the query 
//     // results will contain the results of the query 
//     // fields will contain information about the returned results fields (if any) 
//   })

//Deleting data from Mysql Database User Table
var id = '2';
var string = `DELETE From user WHERE id = ${id}`;
var res = connection.query(string,(err, result, fields)=>{
if (err) {
return console.log(error);
};

  console.log('deleted ' + result.affectedRows + ' rows');
})

  connection.end();
});