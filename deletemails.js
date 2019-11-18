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
    if(result.length>0){
   console.log("Login Success");
   var sql = "select * from emails where receiverid=?"
  var data = [email]
  var sql = mysql.format(sql,data)
  con.query(sql,(err,result)=>{
    if(err)throw err;
    else
      console.log(result);
    var del = readline.question('Do you want to delete mails from inbox (y/n)');
    if(del=='y')
    {
      var sql = "delete from emails where receiverid=?"
var data = [emailid]
var sql = mysql.format(sql,data)
con.query(sql,err=>{
  if(err)throw (error)
    else
      console.log('Data deleted.....')
})
    }
    else{
      console.log('Data not deleted')
    }
  })
 }
   else
    console.log("Login Fail");
  }
})