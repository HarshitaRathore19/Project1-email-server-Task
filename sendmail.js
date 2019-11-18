const con=require('./DBConnct')
const mysql=require('mysql')
const readline=require('readline-sync');
var email=readline.question('Enter email ID:');
var password=readline.question('Enter your Password:');
var sql = "select * from account where emailid = ? and password = ?";
var data = [email,password]
var sql = mysql.format(sql,data)
con.query(sql,(err,result)=>{
  if(err) throw err;
  else
  {
    if(result.length>0)
   {console.log("Login Success");
var rcvrid=readline.question('Enter receiver ID:');
var subject=readline.question('Enter subject:');
var message=readline.question('Enter your message here:');
var sql="insert into emails (senderid,receiverid,subject,message) values(?,?,?,?)";
var data=[email,rcvrid,subject,message]
var sql=mysql.format(sql,data);
con.query(sql,(err)=>{
  if(err) throw err;
  else
  console.log("Mail send successfully...");
})
}
   else
    console.log("Login Fail");
  }
})
/*var rcvrid=readline.question('Enter receiver ID:');
var subject=readline.question('Enter subject:');
var message=readline.question('Enter your message here:');
var sql1="insert into emails (senderid,receiverid,subject,message) values(?,?,?,?)";
var data=[email,rcvrid,subject,message]
var sql1=mysql.format(sql1,data);
con.query(sql1,(err)=>{
  if(err) throw err;
  else
  console.log("Mail send successfully...");
})*/