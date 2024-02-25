const express=require('express');
const connect = require('./database/db');
const dotenv=require('dotenv')
const paper=require('./routes/paper')
const login=require('./routes/login')
dotenv.config()
const app=express();
const cors = require('cors');
// db connection 

connect()
app.use(cors())
app.use(express.json())
app.use('/api',paper)
app.use('/api',login)



app.listen(3000,()=>{
    console.log("Server is listening ",3000)
})