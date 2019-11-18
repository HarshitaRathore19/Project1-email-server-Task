const con=require('./DBConnct')
const mysql=require('mysql')
const readline=require('readline-sync');
var email=readline.question('Enter email ID:');
var password=readline.question('Enter your Password:');
var sql = "select * from account where emailid = ? and password = ?";
var data = [email,password]
var sql = mysql.format(sql,data)
con.query(sql,(err,result)=>{0
  if(err) throw err;
  else
  {
    if(result.length>0){
   console.log("Login Success");
  var  sql = "select * from emails where receiverid=?"
  var data = [email]
  var sql = mysql.format(sql,data)
  con.query(sql,(err,result)=>{
    if(err)throw err;
    else
      console.log(result);
  })
 }

   else
    console.log("Login Fail");
  }
})