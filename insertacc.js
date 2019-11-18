const con=require('./DBConnct')
const mysql=require('mysql')
const readline=require('readline-sync');
var name= readline.question('Please enter acccount holder name:')
var email=readline.question('Please enter email Id:');
var password=readline.question('Please enter your password:');
var sql = "select * from account where emailid=?";
var data = [email]
var sql = mysql.format(sql,data)
con.query(sql,(err,result)=>{
	if(err)throw err;
	else
		{ if(result.length>0)
		console.log('email is already exist')
		else
		{
			var sql="insert into account (name,emailid,password) values(?,?,?)";
var data=[name,email,password]
var sql=mysql.format(sql,data);
con.query(sql,(err,result)=>{
  if(err) throw err;
  else
  console.log("Data inserted...");

})
		} }
})


//var sql="insert into account (name,emailid,password) values(?,?,?)";
//var data=[name,email,password]
//var sql=mysql.format(sql,data);
//con.query(sql,(err,result)=>{
  //if(err) throw err;
  //else
  //{ if()
  //console.log("Data inserted...");
  //else
  //	console.log('Data already exist...')
//}
//})
