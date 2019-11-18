const mysql=require('mysql')
var con=mysql.createConnection({
'host':'localhost',
'database':'emaildb',
'user':'root',
'password':'',
'port':'3306'
})

module.exports=con;

//con.connect(function(err){
 //	if(err)throw(err);
	//else
	//	console.log("Mysql connected seccessfully");
 //})