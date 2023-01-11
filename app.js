const express=require("express")
const bodyParser = require('body-parser')
const app=express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const cors = require("cors");
app.use(cors());

const transactions=require("./controllers/transactions.controller.js")

app.use("/transactions", transactions)

app.get("/",(req,res)=>{
    res.send("Hello")
})

module.exports=app