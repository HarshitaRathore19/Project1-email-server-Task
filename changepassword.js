const con=require('./DBConnct')
const mysql=require('mysql')
const readline=require('readline-sync');

var email=readline.question('Enter your email ID:');
var password=readline.question('Enter your current password:');
var newpass=readline.question('Enter new password here:');

var sql="update account set password=? where emailid=? and password=?";
var data=[newpass,email,password]
var sql=mysql.format(sql,data);
con.query(sql,(err,result)=>{
  if(err) throw err;
  else{
  	if(result.changeRows>0)
  console.log("Password changed succesfully...");
else console.log("Entered wrong current password")
}
})