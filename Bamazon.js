var prompt     = require('prompt');
var mysql      = require('mysql');
var connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	database : 'bamazon'
});

var showProducts = function(){

	connection.query('select ItemId,ProductName,Price from bamazon.Products', function(err,result){
		if(err) throw err; 

		
		console.log(result); 
		

	}); 
	

		prompt.start() 
		prompt.get(ItemId,stockQTY, function (err,result){
			if(err) throw err
				var userProduct = res.ItemId;
			var userAvailable =res.stockQTY; 

			userPurchase(userProduct,userAvailable); 
			start=false 
			showProducts();
		});
	} 


var purchaseCheck = function(itemid,quantity){
	connection.query('select * from bamazon.Products where ItemId=' + itemid, function(err,result){
		if (err) throw err; 
		var productCheck= result[0].StockQTY - quantity; 

		if(productCheck < 0){
			console.log('We are all out :(')
		}else{
			console.log('We got' + result[0].ProductName +'left') 
			updateDB(itemid,res[0].StockQTY);
		}
	});
};

var updateDB = function(itemid,quantity){
	quantity=quantity-1; 
	console.log(quantity) 
	connection.query(' update bamazon.Products set ItemId '+ quantity + 'where ItemId' +itemid, function(err,result){
		if (err) throw err;
	});
}

connection.connect(function(err){
	if (err) throw err; 
}); 
showProducts();

connection.end();