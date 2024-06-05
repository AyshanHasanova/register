const express = require ("express")
const cors = require ("cors")
const mongoose = require ("mongoose")
const userModel= require("./models/UserModel")
require("dotenv").config()
const app= express()
const port=5000

app.post("/register",(req,res)=>{
    userModel.create({...req.body})
    .then(user=>res.json(user))
    .catch(err=>res.json(err))
})
app.post("/login",(req,res)=>{
    const{email,password}= req.body;  
    userModel.findOne({email,password})  
    // .then(user=>{
    //     if(user){
    //        if(user.password===[])
    //     }
    // })
})




mongoose.connect("mongodb+srv://aysenhesen10:aysen555@cluster0.pamyn9e.mongodb.net/").then(res=>{
    console.log("db connected")
})
app.listen(port,(req,res)=>{
    console.log("app running on",{port})
})

app.use(express .json())
app.use(cors())