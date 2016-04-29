var prompt     = require('prompt');
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  database : 'bamazon'
});
 
connection.connect();
 
connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
  if (err) throw err;
 
  console.log('The solution is: ', rows[0].solution);
}); 

connection.query('select * from bamazon.Products', function(err,result){
	if(err) throw err; 
	console.log(result);

}); 
// prompt.start() 
// prompt.get(ItemId,stockQTY, function (err,result){
// 	if(err) 
// 		console.log(err)
// }else
 
// connection.end();