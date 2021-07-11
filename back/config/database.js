const mysql = require('mysql');
const db_info = {
    host:'localhost',
    port:'3306',
    user:'root',
    password:'sjaks7788',
    database:'watcha'
}


module.exports = {
    init:function(){
        return mysql.createConnection(db_info);
    },
    connect:function(con){
        con.connect(function(err){
            if(err) console.error('mysql connection error: '+err);
            else console.log('mysql is  success');
        });
    }
}