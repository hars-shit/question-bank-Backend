const login = require('../models/login');

const router=require('express').Router()

router.post('/login',async(req,res)=>{
    const {email,password}=req.body;
    if(!email || !password){
        res.status(400).json('All fields are neccessory');
    }
    try{
        const user=await login.findOne({email});
        if(!user){
            res.status(404).json("User not found");
        }
        if(user.password !== password){
            res.status(401).json("Invalid Password");
        }
        res.status(200).json('Login Successfully');
    }
    catch(error){
        res.status(500).json("Internal server error")
    }

   
})

module.exports=router; 