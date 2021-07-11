const express = require('express');
const app = express();
const PORT =process.env.PORT||3095;
const http = require('http').Server(app);
const cors = require('cors')
const bodyParser = require('body-parser');
app.use(cors({
    origin:'*',
    // credentials:false,
}));
// app.use(express.urlencoded({extended:true}))

app.use(express.urlencoded({extended:true}));
app.use(express.json());
const db_config =require(__dirname+'/config/database.js');
const conn = db_config.init();

db_config.connect(conn);


app.listen(PORT,()=> {
    console.log(`example ${PORT}`);
})

app.get('/',(req,res)=> {
    res.send('connect');
    console.log('qweqwe')
})
app.post('/api/signup',(req,res)=> { 

    console.log(req.body.data);
    const sql = `insert into board (name,email,password) values ('${req.body.data.name}','${req.body.data.email}','${req.body.data.password}')`
    conn.query(sql,function(err){
        if(err) console.log('query error');
        else{
           res.send(req.body);
        }
    })
})

